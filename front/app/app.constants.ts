import { TileModel } from './models/tile.model';

export class AppConstants {
    public static CAN_PASS = 1;
    public static TUNNEL_BOOT = 2;
    public static TUNNEL_KEY = 3;
    public static TUNNEL_MONSTER = 4;
    public static TUNNEL_DOUBLE_MONSTER = 5;
    public static TUNNEL_BOOT_MONTER = 6;

    public static BASIC_FIELD = [
        new TileModel({value:0, canStepIn: false}),
        new TileModel({value:1, canStepIn: false}),
        new TileModel({value:2, canStepIn: false}),
        new TileModel({value:3, canStepIn: false})
    ];

    public static BASIC_FIELD_ACCESS_MATRIX = [                 //   |0|1|2|3|
        [0,AppConstants.CAN_PASS,0,0],                          //  0|0|1|0|0|
        [AppConstants.CAN_PASS,0,AppConstants.CAN_PASS,0],      //  1|1|0|1|0|
        [0,AppConstants.CAN_PASS,0,AppConstants.CAN_PASS],      //  2|0|1|0|1|
        [0,0,AppConstants.CAN_PASS,0]                           //  3|0|1|1|0|
    ]
}