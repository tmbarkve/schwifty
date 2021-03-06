'use strict';

const Joi = require('@hapi/joi');
const Model = require('../..').Model;

module.exports = class Person extends Model {

    static get tableName() {

        return 'Person';
    }

    static get joiSchema() {

        return Joi.object({
            firstName: Joi.string().required().max(255),
            lastName: Joi.number(),
            age: Joi.number().integer(),
            address: Joi.object({
                street: Joi.string(),
                city: Joi.string(),
                zipCode: Joi.string()
            })
        });
    }
};
