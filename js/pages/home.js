
/* Logging */
import * as bows from 'bows';
var log = bows('Home');

import * as View from 'ampersand-view';
import * as FormView from 'ampersand-form-view';
import * as InputView from 'ampersand-input-view';

import SkyplotView from '../views/skyplot';
import SatelliteListView from '../views/satelliteList';
import SettingsView from '../views/settings';
import DOPView from '../views/dop';

export default View.extend({

  pageTitle: 'home',

  initialize: function () {

    this.skyplotView = new SkyplotView({
      el: this.queryByHook('skyplot'),
      collection: app.satellites
    });

    this.listView = new SatelliteListView({
      el: document.querySelector('table[data-hook=satellite-list]'),
      collection: app.satellites
    });

    this.settingsView = new SettingsView({
      el: document.querySelector('[data-hook=form]'),
      model: app.user
    });

    // this.dopView = new DOPView({
    //   el: document.querySelector('[data-hook=dop]'),
    //   collection: app.satellites
    // });

  },

  render: function () {

    this.registerSubview(this.skyplotView);
    this.skyplotView.render();

    this.registerSubview(this.listView);
    this.listView.render();

    this.registerSubview(this.settingsView);
    this.settingsView.render();

    // this.registerSubview(this.dopView);
    // this.dopView.render();

  }

});

/*
          <div class="form-group">
            <button type="button" class="btn btn-primary calculate">Calculate Positions</button>
            <button type="button" class="btn btn-info locate">Locate Me</button>
          </div>
*/