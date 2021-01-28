import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { TrackedArray, TrackedObject } from 'tracked-built-ins';
import { action } from '@ember/object';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class PurchasesController extends Controller {
    @tracked purchases = new TrackedArray();

    @action
    addPurchase() {
        var pname = this.purchaseName;
        var pprice = this.purchasePrice;
        this.purchases.push({ id: getRandomInt(0, 99), name: pname, price: pprice });
        console.log(this.purchases);
    }
}