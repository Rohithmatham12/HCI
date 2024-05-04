// src/aframe.d.ts
import 'aframe';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': any;
      'a-entity': any;
      'a-box': any;
      'a-sphere': any;
      'a-cylinder': any;
      'a-plane': any;
      'a-text': any;
      'a-sky': any;
      'a-camera': any;
      'a-cursor': any;
      'a-assets' : any;
      'a-light' : any;
      'a-image' : any;
    }
  }
}
