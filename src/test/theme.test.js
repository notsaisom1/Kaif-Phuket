import { describe, it, expect } from 'vitest';
import { theme } from '../theme.fixed';

describe('Theme Configuration', () => {
  describe('Colors', () => {
    it('has primary color defined', () => {
      expect(theme.colors.primary).toBeDefined();
      expect(theme.colors.primary).toMatch(/^#[0-9A-Fa-f]{6}$/);
    });

    it('has secondary color defined', () => {
      expect(theme.colors.secondary).toBeDefined();
    });

    it('has background color defined', () => {
      expect(theme.colors.background).toBeDefined();
    });

    it('has text colors defined', () => {
      expect(theme.colors.text).toBeDefined();
      expect(theme.colors.text.primary).toBeDefined();
      expect(theme.colors.text.secondary).toBeDefined();
      expect(theme.colors.text.white).toBeDefined();
    });

    it('has zone colors defined', () => {
      expect(theme.colors.zones).toBeDefined();
      expect(theme.colors.zones.spa).toBeDefined();
      expect(theme.colors.zones.restaurant).toBeDefined();
      expect(theme.colors.zones.fitness).toBeDefined();
      expect(theme.colors.zones.banya).toBeDefined();
    });

    it('has status colors defined', () => {
      expect(theme.colors.success).toBeDefined();
      expect(theme.colors.warning).toBeDefined();
      expect(theme.colors.error).toBeDefined();
      expect(theme.colors.info).toBeDefined();
    });

    it('has gradients defined', () => {
      expect(theme.colors.gradients).toBeDefined();
      expect(theme.colors.gradients.primary).toBeDefined();
      expect(theme.colors.gradients.spa).toBeDefined();
    });
  });

  describe('Typography', () => {
    it('has fonts defined', () => {
      expect(theme.fonts).toBeDefined();
      expect(theme.fonts.primary).toBeDefined();
      expect(theme.fonts.heading).toBeDefined();
    });

    it('has font sizes defined', () => {
      expect(theme.fontSizes).toBeDefined();
      expect(theme.fontSizes.base).toBe('1rem');
      expect(theme.fontSizes.lg).toBeDefined();
      expect(theme.fontSizes.xl).toBeDefined();
    });

    it('has font weights defined', () => {
      expect(theme.fontWeights).toBeDefined();
      expect(theme.fontWeights.normal).toBe(400);
      expect(theme.fontWeights.bold).toBe(700);
    });

    it('has line heights defined', () => {
      expect(theme.lineHeights).toBeDefined();
      expect(theme.lineHeights.normal).toBeDefined();
    });
  });

  describe('Spacing', () => {
    it('has space values defined', () => {
      expect(theme.space).toBeDefined();
      expect(theme.space['0']).toBe('0');
      expect(theme.space['4']).toBe('1rem');
    });
  });

  describe('Layout', () => {
    it('has breakpoints defined', () => {
      expect(theme.breakpoints).toBeDefined();
      expect(theme.breakpoints.sm).toBeDefined();
      expect(theme.breakpoints.md).toBeDefined();
      expect(theme.breakpoints.lg).toBeDefined();
      expect(theme.breakpoints.xl).toBeDefined();
    });

    it('has container sizes defined', () => {
      expect(theme.sizes).toBeDefined();
      expect(theme.sizes.container).toBeDefined();
    });

    it('has z-index values defined', () => {
      expect(theme.zIndex).toBeDefined();
      expect(theme.zIndex.modal).toBeDefined();
      expect(theme.zIndex.overlay).toBeDefined();
    });
  });

  describe('Visual Effects', () => {
    it('has border radius values defined', () => {
      expect(theme.radii).toBeDefined();
      expect(theme.radii.sm).toBeDefined();
      expect(theme.radii.full).toBeDefined();
    });

    it('has shadows defined', () => {
      expect(theme.shadows).toBeDefined();
      expect(theme.shadows.sm).toBeDefined();
      expect(theme.shadows.lg).toBeDefined();
    });

    it('has transitions defined', () => {
      expect(theme.transitions).toBeDefined();
      expect(theme.transitions.default).toBeDefined();
      expect(theme.transitions.fast).toBeDefined();
    });
  });
});
