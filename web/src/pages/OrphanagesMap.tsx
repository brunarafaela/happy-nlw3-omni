import React from 'react';
import { Link } from "react-router-dom";
import { render } from "react-dom";
import { FiPlus } from "react-icons/fi";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

import mapMarketImg from '../images/map-marker.svg'; 

import '../styles/pages/orphanages-maps.css';

function OrphanagesMap(){
    return (
      <div id="page-map">
        <aside>
          <header>
            <img src={mapMarketImg} alt="Happy" />
            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>
          </header>

          <footer>
            <strong>São Paulo</strong>
            <span>São Paulo</span>
          </footer>
        </aside>

        <Map
          center={[-23.583688, -46.6746253]}
          zoom={15}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
           */}
        </Map>

        <Link to="" className="create-orphanage">
          <FiPlus size={32} color="#fff" />
        </Link>
      </div>
    );
}

export default OrphanagesMap;