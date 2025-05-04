import { formatBytes } from "../src/utils/formatBytes";

describe('formatBytes()', () => {
    it('returns 0 Bytes for 0', () => {
        expect(formatBytes(0)).toBe('0 Bytes');
    });
    it('formats KB correctly', () => {
        expect(formatBytes(1024)).toBe('1 KB');
    });
    it('formats MB with Decimals', () => {
        expect(formatBytes(1234567)).toBe('1.18 MB');
    });
    it('formats maximum til TB', () => {
        expect(formatBytes(12345678910111213)).toBe('11228.33 TB');
    });
});