/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from 'vitest';
import { Lay } from '../';

describe('Hatch', () => {
  const TestEgg = Lay('test-egg');
  const testEgg = TestEgg.hatch;

  describe('name', () => {
    it('should return a proxy with a name', () => {
      expect(testEgg.name).toEqual('test-egg');
    });
  });

  describe('text', () => {
    it('should return a proxy with text', () => {
      testEgg.text = 'Osprey';
      expect(testEgg.text).toEqual('Osprey');
    });
    it('should set a text', () => {
      testEgg.text = 'Kestrel';
      expect(testEgg.text).not.toEqual('Osprey');
      expect(testEgg.text).toEqual('Kestrel');
    });
  });

  describe('children', () => {
    it('Should create an array if a unhatched child is set', () => {
      expect(testEgg.children).toBeFalsy();
      const SecondTestEgg = Lay('test-egg2');
      testEgg.child = SecondTestEgg;
      expect(testEgg.children).toHaveLength(1);
    });
    it('Should add a hatched child', () => {
      const ThirdTestEgg = Lay('test-egg3');
      testEgg.child = ThirdTestEgg.hatch;
      expect(testEgg.children).toHaveLength(2);
    });
  });
});
