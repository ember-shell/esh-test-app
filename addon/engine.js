import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const { modulePrefix } = config;

const Eng = Engine.extend({
  modulePrefix,
  Resolver,

  title: "Ember-Shell Test Application",
  icon: 'engines-dist/esh-test-app/icon.svg',
  multipleInstances: true,

});

loadInitializers(Eng, modulePrefix);

export default Eng;