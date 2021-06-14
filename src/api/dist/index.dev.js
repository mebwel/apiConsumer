"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchData = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = "https://covid19.mathdro.id/api";

var fetchData = function fetchData() {
  var _ref, _ref$data, confirmed, recovered, deaths, lastUpdate;

  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _axios["default"])(url));

        case 3:
          _ref = _context.sent;
          _ref$data = _ref.data;
          confirmed = _ref$data.confirmed;
          recovered = _ref$data.recovered;
          deaths = _ref$data.deaths;
          lastUpdate = _ref$data.lastUpdate;
          return _context.abrupt("return", {
            confirmed: confirmed,
            recovered: recovered,
            deaths: deaths,
            lastUpdate: lastUpdate
          });

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

exports.fetchData = fetchData;