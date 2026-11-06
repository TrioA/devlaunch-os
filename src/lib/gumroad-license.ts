/**
 * Gumroad License Key Verification Engine
 * DevLaunch OS Core Module
 * 
 * Enables creators and indie developers to verify customer licenses,
 * prevent piracy, track seat counts, and unlock premium application features.
 */

export interface GumroadVerificationResponse {
  success: boolean;
  uses?: number;
  purchase?: {
    seller_id: string;
    product_id: string;
    product_name: string;
    permalink: string;
    email: string;
    price: number;
    currency: string;
    created_at: string;
    variants_and_quantity?: string;
  };
  message?: string;
}

export interface LicenseState {
  isValid: boolean;
  licenseKey: string | null;
  customerEmail: string | null;
  productName: string | null;
  verifiedAt: number | null;
}

const STORAGE_KEY = 'devlaunch_license_cache';
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

export class GumroadLicenseManager {
  private productId: string;

  constructor(productId: string) {
    this.productId = productId;
  }

  /**
   * Retrieves cached license verification from localStorage if still valid
   */
  public getCachedLicense(): LicenseState | null {
    if (typeof window === 'undefined') return null;
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return null;
      const parsed: LicenseState = JSON.parse(data);
      if (parsed.verifiedAt && Date.now() - parsed.verifiedAt < CACHE_DURATION_MS) {
        return parsed;
      }
      return null;
    } catch {
      return null;
    }
  }

  /**
   * Verifies a license key against the Gumroad API
   * Endpoint: POST https://api.gumroad.com/v2/licenses/verify
   */
  public async verifyKey(licenseKey: string, incrementUses: boolean = true): Promise<GumroadVerificationResponse> {
    const trimmedKey = licenseKey.trim();
    if (!trimmedKey) {
      return { success: false, message: 'Please provide a valid license key.' };
    }

    try {
      const response = await fetch('https://api.gumroad.com/v2/licenses/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          product_id: this.productId,
          license_key: trimmedKey,
          increment_uses_count: incrementUses ? 'true' : 'false',
        }),
      });

      const json = await response.json();

      if (json.success) {
        const state: LicenseState = {
          isValid: true,
          licenseKey: trimmedKey,
          customerEmail: json.purchase?.email || null,
          productName: json.purchase?.product_name || null,
          verifiedAt: Date.now(),
        };
        if (typeof window !== 'undefined') {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        }
        return {
          success: true,
          uses: json.uses,
          purchase: json.purchase,
        };
      } else {
        return {
          success: false,
          message: json.message || 'Invalid or revoked license key.',
        };
      }
    } catch (err: any) {
      return {
        success: false,
        message: err.message || 'Network error verifying license. Please try again.',
      };
    }
  }

  /**
   * Clears cached license on logout
   */
  public revokeLocalLicense(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}
