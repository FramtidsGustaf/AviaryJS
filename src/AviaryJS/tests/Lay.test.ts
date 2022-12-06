/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from 'vitest';
import { Lay } from '../';

describe('Lay', () => {
  let testEgg = Lay('test-egg');

  describe('name', () => {
    it('should return an object with the name', () => {
      expect(testEgg.name).toEqual('test-egg');
    });
  });

  describe('text', () => {
    it('should set text when text attibute is set', () => {
      const testText = 'Seagull';
      testEgg.text = testText;
      expect(testEgg.text).toEqual(testText);
    });
  });

  describe('children', () => {
    it('should create an array if a child is set', () => {
      expect(testEgg.children).toBeFalsy();
      const secondTestEgg = Lay('test-egg2');
      testEgg.child = secondTestEgg;
      expect(testEgg.children).toBeTruthy();
      expect(testEgg.children?.length).toEqual(1);
      expect(testEgg.children![0]).toEqual(secondTestEgg);
    });
  });

  describe('class/classes/removeClass', () => {
    describe('class/classes', () => {
      it('should create an array if class is set', () => {
        expect(testEgg.classes).toBeFalsy();
        testEgg.class = 'Mugpie';
        expect(testEgg.classes).toBeTruthy();
        expect(testEgg.classes?.length).toEqual(1);
        expect(testEgg.classes![0]).toEqual('Mugpie');
      });

      it('should add classes to array', () => {
        const classes = ['Crow', 'Raven'];
        testEgg.class = classes;
        expect(testEgg.classes?.length).toEqual(3);
        expect(testEgg.classes![1]).toEqual(classes[0]);
        expect(testEgg.classes![2]).toEqual(classes[1]);
      });
    });

    describe('removeClass', () => {
      it('should remove a class from classes', () => {
        testEgg.removeClass = 'Crow';
        expect(testEgg.classes?.length).toEqual(2);
        expect(testEgg.classes).not.toContain('Crow');
      });
    });
  });
});
