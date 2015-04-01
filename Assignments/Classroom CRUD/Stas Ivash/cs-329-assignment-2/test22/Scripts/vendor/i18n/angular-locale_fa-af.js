<<<<<<< HEAD
'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "\u0642\u0628\u0644\u200c\u0627\u0632\u0638\u0647\u0631",
      "\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631"
    ],
    "DAY": [
      "\u06cc\u06a9\u0634\u0646\u0628\u0647",
      "\u062f\u0648\u0634\u0646\u0628\u0647",
      "\u0633\u0647\u200c\u0634\u0646\u0628\u0647",
      "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647",
      "\u067e\u0646\u062c\u0634\u0646\u0628\u0647",
      "\u062c\u0645\u0639\u0647",
      "\u0634\u0646\u0628\u0647"
    ],
    "MONTH": [
      "\u062c\u0646\u0648\u0631\u06cc",
      "\u0641\u0628\u0631\u0648\u0631\u06cc",
      "\u0645\u0627\u0631\u0686",
      "\u0627\u067e\u0631\u06cc\u0644",
      "\u0645\u06cc",
      "\u062c\u0648\u0646",
      "\u062c\u0648\u0644\u0627\u06cc",
      "\u0627\u06af\u0633\u062a",
      "\u0633\u067e\u062a\u0645\u0628\u0631",
      "\u0627\u06a9\u062a\u0648\u0628\u0631",
      "\u0646\u0648\u0645\u0628\u0631",
      "\u062f\u0633\u0645\u0628\u0631"
    ],
    "SHORTDAY": [
      "\u06cc\u06a9\u0634\u0646\u0628\u0647",
      "\u062f\u0648\u0634\u0646\u0628\u0647",
      "\u0633\u0647\u200c\u0634\u0646\u0628\u0647",
      "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647",
      "\u067e\u0646\u062c\u0634\u0646\u0628\u0647",
      "\u062c\u0645\u0639\u0647",
      "\u0634\u0646\u0628\u0647"
    ],
    "SHORTMONTH": [
      "\u062c\u0646\u0648",
      "\u0641\u0648\u0631\u06cc\u0647\u0654",
      "\u0645\u0627\u0631\u0633",
      "\u0622\u0648\u0631\u06cc\u0644",
      "\u0645\u0640\u06cc",
      "\u0698\u0648\u0626\u0646",
      "\u062c\u0648\u0644",
      "\u0627\u0648\u062a",
      "\u0633\u067e\u062a\u0627\u0645\u0628\u0631",
      "\u0627\u06a9\u062a\u0628\u0631",
      "\u0646\u0648\u0627\u0645\u0628\u0631",
      "\u062f\u0633\u0645"
    ],
    "fullDate": "EEEE d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y H:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "H:mm:ss",
    "short": "yyyy/M/d H:mm",
    "shortDate": "yyyy/M/d",
    "shortTime": "H:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Rial",
    "DECIMAL_SEP": "\u066b",
    "GROUP_SEP": "\u066c",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "\u200e(\u00a4",
        "negSuf": ")",
        "posPre": "\u200e\u00a4",
        "posSuf": ""
      }
    ]
  },
  "id": "fa-af",
  "pluralCat": function (n) {  return PLURAL_CATEGORY.OTHER;}
});
=======
'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "\u0642\u0628\u0644\u200c\u0627\u0632\u0638\u0647\u0631",
      "\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631"
    ],
    "DAY": [
      "\u06cc\u06a9\u0634\u0646\u0628\u0647",
      "\u062f\u0648\u0634\u0646\u0628\u0647",
      "\u0633\u0647\u200c\u0634\u0646\u0628\u0647",
      "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647",
      "\u067e\u0646\u062c\u0634\u0646\u0628\u0647",
      "\u062c\u0645\u0639\u0647",
      "\u0634\u0646\u0628\u0647"
    ],
    "MONTH": [
      "\u062c\u0646\u0648\u0631\u06cc",
      "\u0641\u0628\u0631\u0648\u0631\u06cc",
      "\u0645\u0627\u0631\u0686",
      "\u0627\u067e\u0631\u06cc\u0644",
      "\u0645\u06cc",
      "\u062c\u0648\u0646",
      "\u062c\u0648\u0644\u0627\u06cc",
      "\u0627\u06af\u0633\u062a",
      "\u0633\u067e\u062a\u0645\u0628\u0631",
      "\u0627\u06a9\u062a\u0648\u0628\u0631",
      "\u0646\u0648\u0645\u0628\u0631",
      "\u062f\u0633\u0645\u0628\u0631"
    ],
    "SHORTDAY": [
      "\u06cc\u06a9\u0634\u0646\u0628\u0647",
      "\u062f\u0648\u0634\u0646\u0628\u0647",
      "\u0633\u0647\u200c\u0634\u0646\u0628\u0647",
      "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647",
      "\u067e\u0646\u062c\u0634\u0646\u0628\u0647",
      "\u062c\u0645\u0639\u0647",
      "\u0634\u0646\u0628\u0647"
    ],
    "SHORTMONTH": [
      "\u062c\u0646\u0648",
      "\u0641\u0648\u0631\u06cc\u0647\u0654",
      "\u0645\u0627\u0631\u0633",
      "\u0622\u0648\u0631\u06cc\u0644",
      "\u0645\u0640\u06cc",
      "\u0698\u0648\u0626\u0646",
      "\u062c\u0648\u0644",
      "\u0627\u0648\u062a",
      "\u0633\u067e\u062a\u0627\u0645\u0628\u0631",
      "\u0627\u06a9\u062a\u0628\u0631",
      "\u0646\u0648\u0627\u0645\u0628\u0631",
      "\u062f\u0633\u0645"
    ],
    "fullDate": "EEEE d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y H:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "H:mm:ss",
    "short": "yyyy/M/d H:mm",
    "shortDate": "yyyy/M/d",
    "shortTime": "H:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Rial",
    "DECIMAL_SEP": "\u066b",
    "GROUP_SEP": "\u066c",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "\u200e(\u00a4",
        "negSuf": ")",
        "posPre": "\u200e\u00a4",
        "posSuf": ""
      }
    ]
  },
  "id": "fa-af",
  "pluralCat": function (n) {  return PLURAL_CATEGORY.OTHER;}
});
>>>>>>> ce7c8ef5a7f2594ba4f515d10169d52b964d377f
}]);