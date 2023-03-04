"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schemas = exports.ValidateSchema = void 0;
const joi_1 = require("joi");
const ValidateSchema = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.body);
            next();
        }
        catch (error) {
            console.log(error, 'error with validation');
            return res.status(422).json({ error });
        }
    };
};
exports.ValidateSchema = ValidateSchema;
exports.Schemas = {
    chef: {
        create: joi_1.default.object({
            name: joi_1.default.string().required(),
            image: joi_1.default.string().required(),
            description: joi_1.default.string().required(),
            chefOfTheWeek: joi_1.default.boolean().required()
        }),
        update: joi_1.default.object({
            name: joi_1.default.string().required(),
            image: joi_1.default.string().required(),
            description: joi_1.default.string().required(),
            chefOfTheWeek: joi_1.default.boolean().required()
        })
    },
    restaurant: {
        create: joi_1.default.object({
            name: joi_1.default.string().required(),
            chef: joi_1.default.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(),
            opens: joi_1.default.string().required(),
            closes: joi_1.default.string().required(),
            thumb: joi_1.default.string().required(),
            image: joi_1.default.string().required(),
            stars: joi_1.default.number().required(),
            isOpen: joi_1.default.boolean().required(),
            isPopular: joi_1.default.boolean().required(),
            isNew: joi_1.default.boolean().required()
        }),
        update: joi_1.default.object({
            name: joi_1.default.string().required(),
            chef: joi_1.default.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(),
            opens: joi_1.default.string().required(),
            closes: joi_1.default.string().required(),
            thumb: joi_1.default.string().required(),
            image: joi_1.default.string().required(),
            stars: joi_1.default.number().required(),
            isOpen: joi_1.default.boolean().required(),
            isPopular: joi_1.default.boolean().required(),
            isNew: joi_1.default.boolean().required()
        })
    },
    dish: {
        create: joi_1.default.object({
            name: joi_1.default.string().required(),
            restaurant: joi_1.default.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(),
            ingredients: joi_1.default.string().required(),
            image: joi_1.default.string().required(),
            icon: joi_1.default.string().required(),
            price: joi_1.default.number().required()
        }),
        update: joi_1.default.object({
            name: joi_1.default.string().required(),
            restaurant: joi_1.default.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(),
            ingredients: joi_1.default.string().required(),
            image: joi_1.default.string().required(),
            icon: joi_1.default.string().required(),
            price: joi_1.default.number().required()
        })
    }
};
//# sourceMappingURL=ValidateSchema.js.map