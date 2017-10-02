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
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 0.21477253627498172,
        "pitch": 0.25550386718283313,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8695363062615904,
          "pitch": 0.2196133694425697,
          "rotation": 0,
          "target": "1-kitchen-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen-living-room",
      "name": "kitchen-living-room",
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
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 1.2720786578116137,
        "pitch": 0.26179938779915446,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4489196814958731,
          "pitch": 0.0203808773069607,
          "rotation": 0,
          "target": "2-bathroom"
        },
        {
          "yaw": -0.3374011242106594,
          "pitch": 0.026041890880243557,
          "rotation": 4.71238898038469,
          "target": "3-toilet"
        },
        {
          "yaw": -3.031558544615816,
          "pitch": 0.19231020246892783,
          "rotation": 0,
          "target": "0-bedroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2091452165332104,
          "pitch": 0.048537025871500106,
          "title": "Exit / Entrance",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Exit / Entrance</span>"
        }
      ]
    },
    {
      "id": "2-bathroom",
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
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 2.553827632045599,
        "pitch": 0.7312373625922977,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.16201079508189942,
          "pitch": 0.24948626849420918,
          "rotation": 0,
          "target": "1-kitchen-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-toilet",
      "name": "toilet",
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
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 2.435575696179539,
        "pitch": 0.6557020043709709,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07648815827551125,
          "pitch": 0.5889243925176455,
          "rotation": 0,
          "target": "1-kitchen-living-room"
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
