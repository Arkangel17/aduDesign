
// shear-wall edge-nailing matrix PER AWS NDS TABLE 4.3.A
export class aduConfigLibrary {

    //need to add object matrix of shearWallCaps..? 

    constructor(){};
    
     public edgeNailingMatrix(): void {
        const seismic: object = { 
            "struct1": {
                "5/16": {
                    "6d": {6: 400, 4: 600, 3: 780, 2: 1020}
                }, 
                "3/8": {
                    "8d": {6: 460, 4: 720, 3: 920, 2: 1220} 
                },
                "7/16": {
                    "8d": {6: 510, 4: 790, 3: 1010, 2: 1390} 
                },
                "15/32": {
                    "8d": {6: 560, 4: 860, 3: 1100, 2: 1460},
                    "10d": {6: 680, 4: 1020, 3: 1330, 2: 1740}  
                },
                "24/32": {
                    "8d": {6: 560, 4: 860, 3: 1100, 2: 1460},
                    "10d": {6: 680, 4: 1020, 3: 1330, 2: 1740}  
                }
                
            },
            "osb":{
                "5/16": {
                    "6d": {6: 360, 4: 540, 3: 700, 2: 900}
                }, 
                "3/8": {
                    "6d": {6: 400, 4: 600, 3: 780, 2: 1020},
                    "8d": {6: 440, 4: 640, 3: 820, 2: 1060}
                }, 
                "7/16": {
                    "8d": {6: 480, 4: 700, 3: 900, 2: 1170},
                },
                 "15/32": {
                    "8d": {6: 520, 4: 760, 3: 980, 2: 1280},
                    "10d": {6: 620, 4: 920, 3: 1200, 2: 1540}
                 }, 
                 "19/32": {
                    "10d": {6: 680, 4: 1020, 3: 1330, 2: 1740}
                 }, 
                },
            "plyWdSiding":{
                "5/16": {
                    "6d": {6: 280, 4: 420, 3: 550, 2: 720}
                }, 
                "3/8": {
                    "8d": {6: 320, 4: 480, 3: 620, 2: 820}
                }, 
            }
        }
        const wind: object = {
            "struct1": {
                "5/16": {
                    "6d": {6: 560, 4: 840, 3: 1090, 2: 1430}
                }, 
                "3/8": {
                    "8d": {6: 645, 4: 1010, 3: 1290, 2: 1710} 
                },
                "7/16": {
                    "8d": {6: 715, 4: 1105, 3: 1415, 2: 1875} 
                },
                "15/32": {
                    "8d": {6: 785, 4: 1205, 3: 1540, 2: 2045},
                    "10d": {6: 950, 4: 1430, 3: 1860, 2: 2435} 
                }
            },
            "osb": {
                "5/16": {
                    "6d": {6: 505, 4: 755, 3: 980, 2: 1260}
                }, 
                "3/8": {
                    "6d": {6: 560, 4: 840, 3: 1090, 2: 1430},
                    "8d": {6: 615, 4: 895, 3: 1150, 2: 1485}
                }, 
                "7/16": {
                    "8d": {6: 670, 4: 980, 3: 1260, 2: 1640}
                },
                 "15/32": {
                    "8d": {6: 730, 4: 1065, 3: 1370, 2: 1790},
                    "10d": {6: 870, 4: 1290, 3: 1680, 2: 2155}
                 }, 
                 "19/32": {
                    "10d": {6: 950, 4: 1430, 3: 1860, 2: 2435}
                 }, 
                },
            "plyWdSiding":{
                "5/16": {
                    "6d": {6: 390, 4: 590, 3: 770, 2: 1010}
                }, 
                "3/8": {
                    "8d": {6: 450, 4: 670, 3: 870, 2: 1150}
                    }, 
                }
            }
        }
    
    public getCustomHDUConfig (): void {

        const holdDownLib: object = {
            'DTT1Z':{
                '2x6':910, '4x4':910, '4x6':910, '4x8':910
            },
            'DTT2Z-SDS2.5':{
                '4x4':2145, '4x6':2145, '4x8':2145
            },
            'HDU2-SDS2.5': {
                '4x4':3075, '4x6':3075, '4x8':3075
            },
            'HDU4-SDS2.5': {
                '4x4':4565, '4x6':4565, '4x8':4565
            },
            'HDU5-SDS2.5': {
                '4x4':5645, '4x6':5645, '4x8':5645
            },
            'HDU8-SDS2.5': {
                '4x4':6970, '4x6':7870, '4x8':7870
            },
            'HDU11-SDS2.5': {
                '4x6':9335, '4x8':11175
            },
            'HDU14-SDS2.5':{
                '4x6':14390, '4x8':14445
            },
            'CMST12': {'4x8': 9215},
            'CMST14': {'4x8': 6475},
            'CMSTC16': {'4x8': 4690},
            'CS14': {'4x8': 2490},
            'CS16': {'4x8': 1705},
            'CS20': {'4x8': 1030}
        }
    }

    public  shearWallCaps (): void {

        const eq: object = {

          "340": { type: "A", stiffnessGa: 16, value: 1 },
          "510": { type: "B", stiffnessGa: 20, value: 2 },
          "665": { type: "C", stiffnessGa: 22, value: 3 },
          "870": { type: "D", stiffnessGa: 28, value: 4 },
          "1020": { type: "BB", stiffnessGa: 40, value: 5 },
          "1330": { type: "CC", stiffnessGa: 44, value: 6 },
          "1740": { type: "DD", stiffnessGa: 56, value: 7 }

        }

        const wind: object = {

          "475": { type: "A", stiffnessGa: 16, value: 1 },
          "715": { type: "B", stiffnessGa: 20, value: 2 },
          "930": { type: "C", stiffnessGa: 22, value: 3 },
          "1218": { type: "D", stiffnessGa: 28, value: 4 },
          "1430": { type: "BB", stiffnessGa: 40, value: 5 },
          "1860": { type: "CC", stiffnessGa: 44, value: 6 },
          "2435": { type: "DD", stiffnessGa: 56, value: 7 }

        }
    }
        

}

export default aduConfigLibrary;