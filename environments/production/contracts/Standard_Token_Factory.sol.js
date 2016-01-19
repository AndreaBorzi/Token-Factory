"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Standard_Token_Factory = (function (_Pudding) {
    _inherits(Standard_Token_Factory, _Pudding);

    function Standard_Token_Factory() {
      _classCallCheck(this, Standard_Token_Factory);

      _get(Object.getPrototypeOf(Standard_Token_Factory.prototype), "constructor", this).apply(this, arguments);
    }

    return Standard_Token_Factory;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Standard_Token_Factory.abi = [{ "constant": false, "inputs": [{ "name": "_initialAmount", "type": "uint256" }], "name": "createStandardToken", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }], "name": "created", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [], "name": "createdByMe", "outputs": [{ "name": "", "type": "address[]" }], "type": "function" }];
  Standard_Token_Factory.binary = "6060604052610598806100126000396000f3606060405260e060020a600035046305215b2f81146100315780635f8dead314610107578063dc3f65d314610143575b005b6101bb600435600080808360606103378061026183390180828152602001915050604051809103906000f0915081905080600160a060020a031663a9059cbb33866040518360e060020a0281526004018083600160a060020a03168152602001828152602001925050506020604051808303816000876161da5a03f11561000257505050600160a060020a033316835260208390526040832080546001810180835582818380158290116102225781836000526020600020918201910161022291905b8082111561025d578a81556001016100f4565b6101bb60043560243560006020819052828152604090208054829081101561000257506000908152602090200154600160a060020a0316905081565b6101d860006060818152600160a060020a03331682526020828152604092839020805460a09281028301909452608084815292939091828280156101b157602002820191906000526020600020905b8154600160a060020a0316815260019190910190602001808311610192575b5050505050905090565b60408051600160a060020a03929092168252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600302600f01f1509050019250505060405180910390f35b50505091909060005260206000209001600050805473ffffffffffffffffffffffffffffffffffffffff191683179055509150805050919050565b5090566060604052604051602080610337833950608060405251600160a060020a03331660009081526020819052604090208190556002819055506102f2806100456000396000f3606060405236156100565760e060020a6000350463095ea7b3811461005857806318160ddd146100c357806323b872dd146100d157806370a0823114610207578063a9059cbb14610227578063dd62ed3e146102b9575b005b6100c760043560243533600160a060020a03908116600081815260016020908152604080832094871680845294825282208590556060858152919392917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259190a35060015b92915050565b6002545b6060908152602090f35b6100c7600435602435604435600160a060020a038316600090815260208190526040812054829010801590610124575060016020908152604080832033600160a060020a03168452909152812054829010155b80156101305750600082115b1561020057600160a060020a03808416808352602083815260408420805486019055606085815291928716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a3816000600050600086600160a060020a03168152602001908152602001600020600082828250540392505081905550816001600050600086600160a060020a03168152602001908152602001600020600050600033600160a060020a03168152602001908152602001600020600082828250540392505081905550600190505b9392505050565b600160a060020a03600435166000908152602081905260409020546100c7565b6100c760043560243533600160a060020a03166000908152602081905260408120548290108015906102595750600082115b156102ed57604080822080548490039055600160a060020a03808516808452918320805485019055606084815233909116907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602090a35060016100bd565b6100c7600435602435600160a060020a038083166000908152600160209081526040808320938516835292905220546100bd565b6100bd56";

  if ("0xcdebca5d3f9ed835caa418c3d36b37896515dac1" != "") {
    Standard_Token_Factory.address = "0xcdebca5d3f9ed835caa418c3d36b37896515dac1";

    // Backward compatibility; Deprecated.
    Standard_Token_Factory.deployed_address = "0xcdebca5d3f9ed835caa418c3d36b37896515dac1";
  }

  Standard_Token_Factory.generated_with = "1.0.3";
  Standard_Token_Factory.contract_name = "Standard_Token_Factory";

  return Standard_Token_Factory;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Standard_Token_Factory = factory;
}