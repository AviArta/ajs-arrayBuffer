import ArrayBufferConverter from '../models/arrayBufferConverter';
import {jest} from '@jest/globals';

jest.useFakeTimers();
 
// eslint-disable-next-line no-undef
test('create ArrayBufferConverter', () => {
    const converter = new ArrayBufferConverter(),
     data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    converter.load(data);
    // eslint-disable-next-line no-undef
    expect(converter.toString()).toBe(data);
});
