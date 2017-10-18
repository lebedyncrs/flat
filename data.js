var APP_DATA = {
  "scenes": [
    {
      "id": "0-azienka",
      "name": "Łazienka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4776106795445818,
          "pitch": 0.6668825057807819,
          "rotation": 0,
          "target": "6-korytarz---przejcia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pokj-duy",
      "name": "Pokój duży",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7933235153422142,
          "pitch": 0.08620686566189661,
          "rotation": 0,
          "target": "6-korytarz---przejcia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pokj-may",
      "name": "Pokój mały",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0788603500474867,
          "pitch": 0.3161885265644191,
          "rotation": 5.497787143782138,
          "target": "5-salon"
        },
        {
          "yaw": -2.8155452949322335,
          "pitch": 0.34016097212816376,
          "rotation": 0.7853981633974483,
          "target": "3-kuchnia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kuchnia",
      "name": "Kuchnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.627457095661363,
          "pitch": 0.19303658183733674,
          "rotation": 0,
          "target": "5-salon"
        },
        {
          "yaw": -2.3140355497275777,
          "pitch": 0.12767299312639935,
          "rotation": 5.497787143782138,
          "target": "2-pokj-may"
        },
        {
          "yaw": 3.135199133161806,
          "pitch": 0.2746405628021087,
          "rotation": 0,
          "target": "4-korytarz---wejcie-na-zewntrz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-korytarz---wejcie-na-zewntrz",
      "name": "Korytarz - wejście na zewnątrz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.728740542277681
      },
      "linkHotspots": [
        {
          "yaw": 1.8413373453425157,
          "pitch": 0.7161166942811494,
          "rotation": 9.42477796076938,
          "target": "6-korytarz---przejcia"
        },
        {
          "yaw": 1.8465410702428509,
          "pitch": 0.15010899247242548,
          "rotation": 0,
          "target": "0-azienka"
        },
        {
          "yaw": 1.8483369223621482,
          "pitch": 0.4737785754232995,
          "rotation": 4.71238898038469,
          "target": "1-pokj-duy"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.028789331302892407,
          "pitch": 0.12465133929733518,
          "rotation": 0,
          "target": "2-pokj-may"
        },
        {
          "yaw": -1.3975582824293724,
          "pitch": 0.2687631555919534,
          "rotation": 0,
          "target": "3-kuchnia"
        },
        {
          "yaw": -0.582602125618255,
          "pitch": 0.07881818639761917,
          "rotation": 0.7853981633974483,
          "target": "4-korytarz---wejcie-na-zewntrz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-korytarz---przejcia",
      "name": "Korytarz - przejścia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04149595842604725,
          "pitch": 0.4524429814748192,
          "rotation": 0,
          "target": "0-azienka"
        },
        {
          "yaw": -1.4716780851644344,
          "pitch": 0.36041192628796104,
          "rotation": 0,
          "target": "1-pokj-duy"
        },
        {
          "yaw": 3.072326849859566,
          "pitch": 0.5903370055257646,
          "rotation": 9.42477796076938,
          "target": "4-korytarz---wejcie-na-zewntrz"
        },
        {
          "yaw": -2.680429530903641,
          "pitch": 0.30122745962513164,
          "rotation": 1.5707963267948966,
          "target": "3-kuchnia"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
