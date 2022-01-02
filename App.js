/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
  Viro3DObject,
  ViroAmbientLight,
} from '@viro-community/react-viro';
import Tts from 'react-native-tts';

const InitialScene = props => {
  let data = props.sceneNavigator.viroAppProps;
  ViroMaterials.createMaterials({
    eye: {
      diffuseTexture: require('./assets/eyeTextureNew2.jpg'),
    },
    cone: {
      diffuseTexture: require('./assets/conetexture.jpg'),
    },
    eggplant: {
      diffuseTexture: require('./assets/eggplanttexture.png'),
    },
    sack: {
      diffuseTexture: require('./assets/sakotexture.jpg'),
    },
    can: {
      diffuseTexture: require('./assets/can.jpg'),
    },
    bow: {
      diffuseTexture: require('./assets/bow.png'),
    },
    frog: {
      diffuseTexture: require('./assets/frog.png'),
    },
    milk: {
      diffuseTexture: require('./assets/milk.png'),
    },
    leaf: {
      diffuseTexture: require('./assets/leaf.png'),
    },
    stair: {
      diffuseTexture: require('./assets/stair.jpg'),
    },
    fish: {
      diffuseTexture: require('./assets/fish.jpg'),
    },
    pillow: {
      diffuseTexture: require('./assets/pillow.png'),
    },
    radio: {
      diffuseTexture: require('./assets/radio.jpg'),
    },
    key: {
      diffuseTexture: require('./assets/key.jpg'),
    },
    shower: {
      diffuseTexture: require('./assets/shower.png'),
    },
    cup: {
      diffuseTexture: require('./assets/cup.png'),
    },
    bull: {
      diffuseTexture: require('./assets/bull.jpg'),
    },
    jar: {
      diffuseTexture: require('./assets/jar.png'),
    },
    egg: {
      diffuseTexture: require('./assets/egg.jpg'),
    },
    skirt: {
      diffuseTexture: require('./assets/skirt.png'),
    },
  });

  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {
        rotateY: '+=90',
      },
    },
    row: {
      duration: 1000,
      properties: {
        rotateY: '+=5',
      },
    },
  });

  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" />
      {data.object === 'eye' ? (
        <Viro3DObject
          source={require('./assets/eye.obj')}
          position={[0, 0, -6]}
          rotation={[75, 100, 0]}
          scale={[0.5, 0.5, 0.5]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['eye']}
          type="OBJ"
        />
      ) : data.object === 'cone' ? (
        <Viro3DObject
          source={require('./assets/cone.obj')}
          position={[0, 0, -4]}
          rotation={[0, 50, 0]}
          scale={[0.8, 0.8, 0.8]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['cone']}
          type="OBJ"
        />
      ) : data.object === 'eggplant' ? (
        <Viro3DObject
          source={require('./assets/eggplant.obj')}
          position={[0, 0, -8]}
          rotation={[0, 50, 0]}
          scale={[0.8, 0.8, 0.8]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['eggplant']}
          type="OBJ"
        />
      ) : data.object === 'sack' ? (
        <Viro3DObject
          source={require('./assets/sako.obj')}
          position={[0, 0, -2]}
          rotation={[0, 50, 0]}
          scale={[0.5, 0.5, 0.5]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['sack']}
          type="OBJ"
        />
      ) : data.object === 'can' ? (
        <Viro3DObject
          source={require('./assets/can.obj')}
          position={[0, 0, -2]}
          rotation={[0, 50, 0]}
          scale={[0.5, 0.5, 0.5]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['can']}
          type="OBJ"
        />
      ) : data.object === 'bow' ? (
        <Viro3DObject
          source={require('./assets/bow.obj')}
          position={[0, 0, -1]}
          rotation={[0, 50, 0]}
          scale={[0.05, 0.05, 0.05]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['bow']}
          type="OBJ"
        />
      ) : data.object === 'frog' ? (
        <Viro3DObject
          source={require('./assets/frog.obj')}
          position={[0, 0, -1]}
          rotation={[0, 40, 0]}
          scale={[0.05, 0.05, 0.05]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['frog']}
          type="OBJ"
        />
      ) : data.object === 'milk' ? (
        <Viro3DObject
          source={require('./assets/milk.obj')}
          position={[0, 0, -2]}
          rotation={[0, 40, 0]}
          scale={[0.05, 0.05, 0.05]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['milk']}
          type="OBJ"
        />
      ) : data.object === 'leaf' ? (
        <Viro3DObject
          source={require('./assets/leaf.obj')}
          position={[0, 0, -9]}
          rotation={[5, 40, 0]}
          scale={[1, 1, 1]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['leaf']}
          type="OBJ"
        />
      ) : data.object === 'stair' ? (
        <Viro3DObject
          source={require('./assets/stair.obj')}
          position={[0, 0, -9]}
          rotation={[5, 70, 0]}
          scale={[0.05, 0.05, 0.05]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['stair']}
          type="OBJ"
        />
      ) : data.object === 'fish' ? (
        <Viro3DObject
          source={require('./assets/fish.obj')}
          position={[0, 0, -0.5]}
          rotation={[35, 40, 0]}
          scale={[1, 1, 1]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['fish']}
          type="OBJ"
        />
      ) : data.object === 'pillow' ? (
        <Viro3DObject
          source={require('./assets/pillow.obj')}
          position={[0, 0, -6]}
          rotation={[5, 40, 0]}
          scale={[0.3, 0.3, 0.3]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['pillow']}
          type="OBJ"
        />
      ) : data.object === 'radio' ? (
        <Viro3DObject
          source={require('./assets/radio.obj')}
          position={[0, 0, -6]}
          rotation={[0, 40, 0]}
          scale={[0.3, 0.3, 0.3]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['radio']}
          type="OBJ"
        />
      ) : data.object === 'key' ? (
        <Viro3DObject
          source={require('./assets/key.obj')}
          position={[0, 0, -15]}
          rotation={[35, 40, 0]}
          scale={[0.02, 0.02, 0.02]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['key']}
          type="OBJ"
        />
      ) : data.object === 'shower' ? (
        <Viro3DObject
          source={require('./assets/shower.obj')}
          position={[0, -2, -3]}
          rotation={[0, 40, 0]}
          scale={[0.5, 0.5, 0.5]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['shower']}
          type="OBJ"
        />
      ) : data.object === 'cup' ? (
        <Viro3DObject
          source={require('./assets/cup.obj')}
          position={[0, -0.5, -2]}
          rotation={[0, 40, 0]}
          scale={[0.05, 0.05, 0.05]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['cup']}
          type="OBJ"
        />
      ) : data.object === 'bull' ? (
        <Viro3DObject
          source={require('./assets/bull.obj')}
          position={[0, 0, -3]}
          rotation={[-85, 40, 0]}
          scale={[0.3, 0.3, 0.3]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['bull']}
          type="OBJ"
        />
      ) : data.object === 'jar' ? (
        <Viro3DObject
          source={require('./assets/jar.obj')}
          position={[0, -2, -5]}
          rotation={[0, 40, 0]}
          scale={[0.25, 0.25, 0.25]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['jar']}
          type="OBJ"
        />
      ) : data.object === 'egg' ? (
        <Viro3DObject
          source={require('./assets/egg.obj')}
          position={[0, 7, -15]}
          rotation={[0, 40, 0]}
          scale={[0.1, 0.1, 0.1]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['egg']}
          type="OBJ"
        />
      ) : data.object === 'skirt' ? (
        <Viro3DObject
          source={require('./assets/skirt.obj')}
          position={[0, -1, -3]}
          rotation={[0, 40, 0]}
          scale={[1, 1, 1]}
          animation={{name: 'rotate', loop: true, run: true}}
          materials={['skirt']}
          type="OBJ"
        />
      ) : (
        <ViroText
          text={'None'}
          position={[0, 1, -3]}
          style={{fontSize: 80, fontFamily: 'Arial', color: 'red'}}
        />
      )}

      {/* <ViroText
        text={'Rico'}
        position={[0, 1.5, -3]}
        style={{fontSize: 80, fontFamily: 'Arial', color: 'red'}}
      />

      <ViroBox
        height={2}
        length={2}
        width={2}
        position={[0, 0.5, -3]}
        scale={[0.2, 0.2, 0.2]}
        materials={['cement']}
        animation={{name: 'rotate', loop: true, run: true}}
      /> */}
    </ViroARScene>
  );
};

export default () => {
  const [object, setObject] = useState('jar');

  const handleVoice = () => {
    Tts.speak('Mata');
  };

  return (
    <View style={styles.mainView}>
      <ViroARSceneNavigator
        initialScene={{
          scene: InitialScene,
        }}
        viroAppProps={{object: object}}
        style={{flex: 1}}
      />
      <View style={styles.controlsView}>
        <TouchableOpacity
          onPress={() => {
            setObject('eye');
            //handleVoice();
          }}>
          <Text style={styles.text}>Mata</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setObject('jar')}>
          <Text style={styles.text}>Apa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  controlsView: {
    width: '100%',
    height: 100,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    margin: 20,
    backgroundColor: '#9d9d9d',
    padding: 10,
    fontWeight: 'bold',
  },
});
