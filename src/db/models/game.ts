/* eslint-disable @typescript-eslint/camelcase */

import { Sequelize, DataTypes } from 'sequelize';
import { InitializableModel } from '../InitializeableModel';

export default class Game extends InitializableModel {
    public id!: number;
    public name!: string;
    public phase_length_minutes!: number;
    public public!: boolean;
    public invite_code!: string | null;
    public no_processing_days!: number;
    public game_messaging!: boolean;
    public win_supply_centers!: number | null;
    public max_turns!: number | null;

    // static associate() { }

    static initialize(sequelize: Sequelize): void {
        Game.init(
            {
                id: { type: DataTypes.INTEGER, primaryKey: true },
                name: DataTypes.STRING,
                phase_length_minutes: DataTypes.INTEGER,
                public: DataTypes.BOOLEAN,
                invite_code: DataTypes.STRING,
                no_processing_days: DataTypes.TINYINT,
                variant: DataTypes.STRING,
                game_messaging: DataTypes.STRING,
                win_supply_centers: DataTypes.INTEGER,
                max_turns: DataTypes.INTEGER
            },
            { sequelize }
        );
    }
}
