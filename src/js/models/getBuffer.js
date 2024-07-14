export default function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return ((input) => {
      const buffer = new ArrayBuffer(data.length * 2),
       bufferView = new Uint16Array(buffer);
      for (let ind = 0; ind < input.length; ind += 1) {
        bufferView[ind] = input.charCodeAt(ind);
      }
      return buffer;
    })(data);
  }
  