'use strict';

const Joi = require('@hapi/joi');
const Model = require('../..').Model;

module.exports = class Movie extends Model {

    static get tableName() {

        return 'Movie';
    }

    static get joiSchema() {

        return Joi.object({
            title: Joi.string(),
            subTitle: Joi.string()
        });
    }
};
