var APP_DATA = {
  "scenes": [
    {
      "id": "0-bedroom-center",
      "name": "bedroom-center",
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
        "yaw": -2.529362418939611,
        "pitch": 0.11879971838629366,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6076093395530329,
          "pitch": 0.06055795176012424,
          "rotation": 0,
          "target": "2-bedroom-corridor"
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
        "yaw": -0.061746424219160545,
        "pitch": 0.17682855023832644,
        "fov": 1.7261186739995533
      },
      "linkHotspots": [
        {
          "yaw": 2.193534565395524,
          "pitch": -0.06320562305858068,
          "rotation": 0,
          "target": "2-bedroom-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom-corridor",
      "name": "bedroom-corridor",
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
        "yaw": -2.052783369661844,
        "pitch": -0.002650357683320337,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9499887852222066,
          "pitch": 0.12677437956562976,
          "rotation": 0,
          "target": "1-bathroom"
        },
        {
          "yaw": -1.331124058545953,
          "pitch": 0.1858759711824831,
          "rotation": 6.283185307179586,
          "target": "3-orridor"
        },
        {
          "yaw": 1.5815429729180703,
          "pitch": 0.1266320503574896,
          "rotation": 0,
          "target": "0-bedroom-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-orridor",
      "name": "сorridor",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.17431811110181883,
          "pitch": 0.09792070267623032,
          "rotation": 0,
          "target": "2-bedroom-corridor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.784602146793187,
          "pitch": 0.18771337858164117,
          "title": "Exit",
          "text": "Exit"
        }
      ]
    }
  ],
  "name": "Apartment #1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
