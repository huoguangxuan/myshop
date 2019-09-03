const _ = require('lodash')

const TRANSITION = Symbol('Application#transition');
module.exports={
    _,
    // 事务
    async transition() {
        if (!this[TRANSITION]) {
        this[TRANSITION] = await this.model.transaction();
        }
        return this[TRANSITION];
    },
    deleteTransition() {
        this[TRANSITION] = null;
    },
}