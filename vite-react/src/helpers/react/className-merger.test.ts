import { describe, expect, it as test } from 'vitest';
import { cn } from './className-merger.ts';


describe('ClassName Merger', () => {
    test('All', () => {
        expect(cn('string', null, undefined, '', 'loading')).toBe('string' +
            ' loading');
        expect(cn(null, undefined)).toBe('');
    });
});