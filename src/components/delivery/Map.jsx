import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {themeColors} from '../../theme';

const Map = () => {
  return (
    <MapView
      style={{flex: 1}}
      userInterfaceStyle="dark"
      mapType="standard"
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 45.741155,
        longitude: 21.204997,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}>
      <Marker
        coordinate={{
          latitude: 45.741155,
          longitude: 21.204997,
        }}
        title="Papa Johns"
        description="Hot and spicy pizzas"
        pinColor={themeColors.bgColor(1)}
      />
    </MapView>
  );
};

export default Map;
