'use strict';

import {EventEmitter} from "events";
import {Dispatcher} from "flux";

class BaseStore extends EventEmitter {
    constructor() {
        super();
        this._dispatcher = new Dispatcher();
        this.dispatchHandler = this.dispatchHandler.bind(this);
        this._dispatcher.register(this.dispatchHandler);
    }

    getDispatcher() {
        return this._dispatcher;
    }

    emitChange() {
        this.emit('change');
    }

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    dispatchHandler(action) {
        this.emitChange();
    }
}

export default BaseStore;