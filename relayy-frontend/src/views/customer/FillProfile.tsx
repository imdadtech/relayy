import React, { useRef, type Ref, useEffect } from 'react';
import { APP_TEXTS } from '../../utils/constants';
import CustomInput from '../../components/CustomInput';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const FillProfile: React.FC = () => {
  const mapRef: Ref<HTMLDivElement> | undefined = useRef(null);
  const mapContainerRef: Ref<HTMLDivElement> | undefined = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-74.0242, 40.6941],
      zoom: 10.12,
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <div className="mx-5 md:w-1/4 md:mx-auto mt-20">
      <h1 className="font-bold text-2xl leading-[26px] tracking-[-2%] mb-2">
        {APP_TEXTS.fillMyProfile}
      </h1>
      <p className="text-[#6D7580] font-normal text-base leading-[22px] tracking-[-2%] mb-8">
        {APP_TEXTS.profilDescription}
      </p>

      <div className="flex flex-row gap-4">
        <CustomInput placeholder={APP_TEXTS.name} />
        <CustomInput placeholder={APP_TEXTS.firstName} />
      </div>
      <div className="mb-8"></div>

      <CustomInput placeholder={APP_TEXTS.phone} />

      <div className="mb-8"></div>

      <div>
        <CustomInput placeholder={APP_TEXTS.email} type="email" />
      </div>
      <div className="mb-8"></div>
      <div
        className="w-full h-[370px] bg-amber-100"
        ref={mapContainerRef}
      ></div>
    </div>
  );
};

export default FillProfile;
