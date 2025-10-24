import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import My3DModel from '../components/My3DModel';

const HomePage = () => (
  <div>
    <h1>Company Introduction</h1>
    <div style={{ height: '600px' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight />
        <Suspense fallback={null}>
          <My3DModel />
        </Suspense>
      </Canvas>
    </div>
    {/* Other content like featured products */}
  </div>
);

export default HomePage;
