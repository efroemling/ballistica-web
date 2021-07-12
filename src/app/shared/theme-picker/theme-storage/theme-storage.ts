import {Injectable, EventEmitter} from '@angular/core';

export interface BallisticaSiteTheme {
  name: string;
  displayName?: string;
  accent: string;
  primary: string;
  isDark?: boolean;
  isDefault?: boolean;
}


@Injectable()
export class ThemeStorage {
  static storageKey = 'ballistica-theme-storage-current-name';

  onThemeUpdate: EventEmitter<BallisticaSiteTheme> = new EventEmitter<BallisticaSiteTheme>();

  storeTheme(theme: BallisticaSiteTheme) {
    try {
      window.localStorage[ThemeStorage.storageKey] = theme.name;
    } catch { }

    this.onThemeUpdate.emit(theme);
  }

  getStoredThemeName(): string | null {
    try {
      return window.localStorage[ThemeStorage.storageKey] || null;
    } catch {
      return null;
    }
  }

  clearStorage() {
    try {
      window.localStorage.removeItem(ThemeStorage.storageKey);
    } catch { }
  }
}
