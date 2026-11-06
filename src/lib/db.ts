/**
 * Lightweight Offline-First Local Storage DB Wrapper
 * DevLaunch OS Utility
 * 
 * Provides typed, schema-safe CRUD operations for client-side micro-SaaS applications
 */

export class MicroDB<T extends { id: string }> {
  private collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = `devlaunch_db_${collectionName}`;
  }

  private getAllRaw(): T[] {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(this.collectionName);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveAll(items: T[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.collectionName, JSON.stringify(items));
  }

  public list(): T[] {
    return this.getAllRaw();
  }

  public get(id: string): T | undefined {
    return this.getAllRaw().find(item => item.id === id);
  }

  public insert(item: T): T {
    const items = this.getAllRaw();
    items.unshift(item);
    this.saveAll(items);
    return item;
  }

  public update(id: string, updates: Partial<T>): T | null {
    const items = this.getAllRaw();
    const index = items.findIndex(item => item.id === id);
    if (index === -1) return null;
    items[index] = { ...items[index], ...updates };
    this.saveAll(items);
    return items[index];
  }

  public remove(id: string): boolean {
    const items = this.getAllRaw();
    const filtered = items.filter(item => item.id !== id);
    if (filtered.length === items.length) return false;
    this.saveAll(filtered);
    return true;
  }
}
