var APP_DATA = {
  "scenes": [
    {
      "id": "0-bedroom",
      "name": "bedroom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1415,
      "initialViewParameters": {
        "yaw": -2.9874366927199674,
        "pitch": 0.10789648750917635,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6734241731410098,
          "pitch": 0.17423433066887384,
          "rotation": 0,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bathroom",
      "name": "bathroom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1415,
      "initialViewParameters": {
        "yaw": -0.19752439547859169,
        "pitch": 0.07803150904618938,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.224862395659244,
          "pitch": 0.14806549922989198,
          "rotation": 0,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrance",
      "name": "entrance",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1415,
      "initialViewParameters": {
        "yaw": 1.2951363765943267,
        "pitch": 0.20708740019287575,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1930690737905625,
          "pitch": 0.0494360789232271,
          "rotation": 10.995574287564278,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "kitchen",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1415,
      "initialViewParameters": {
        "yaw": 1.56083375940515,
        "pitch": 0.05451914108667566,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7138083245010263,
          "pitch": -0.011828458020403332,
          "rotation": 0,
          "target": "2-entrance"
        },
        {
          "yaw": -0.037166102101897636,
          "pitch": 0.05108734471749443,
          "rotation": 0,
          "target": "0-bedroom"
        },
        {
          "yaw": -1.5391549853101267,
          "pitch": 0.11091432918621535,
          "rotation": 0,
          "target": "1-bathroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Apartment",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
