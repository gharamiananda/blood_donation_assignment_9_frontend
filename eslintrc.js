module.exports = {
    "extends": ["eslint:recommended", "next"],
    "rules": {
        "max-len": ["error", { code: 4000 }],
        "prefer-promise-reject-errors": ["off"],
        "react/jsx-filename-extension": ["off"],
        "react/prop-types": ["warn"],
        "no-return-assign": ["off"],
    },
}