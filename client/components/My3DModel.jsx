import { useGLTF } from '@react-three/drei';

function My3DModel() {
  const gltf = useGLTF('/models/myModel.glb');
  return <primitive object={gltf.scene} />;
}

export default My3DModel;
