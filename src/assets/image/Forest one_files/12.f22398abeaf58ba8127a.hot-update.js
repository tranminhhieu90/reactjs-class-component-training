webpackHotUpdate(12,{

/***/ "./src/components/SimpleMode/Inspection/index.tsx":
/*!********************************************************!*\
  !*** ./src/components/SimpleMode/Inspection/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Common/Form/CustomField */ "./src/components/Common/Form/CustomField.tsx");
/* harmony import */ var components_Common_SmallHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Common/SmallHeader */ "./src/components/Common/SmallHeader/index.tsx");
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! i18n */ "./src/i18n.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var echarts_for_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! echarts-for-react */ "./node_modules/echarts-for-react/esm/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var containers_Examination_selector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! containers/Examination/selector */ "./src/containers/Examination/selector.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.less */ "./src/components/SimpleMode/Inspection/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_13__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/hieu-tran/Documents/project/forset-tone-client/src/components/SimpleMode/Inspection/index.tsx";













const {
  NumberType
} = rsuite__WEBPACK_IMPORTED_MODULE_2__["Schema"].Types;

class SimpleModeInspection extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.model = rsuite__WEBPACK_IMPORTED_MODULE_2__["Schema"].Model({
      '1eb25b30-eee8-4e20-9ff3-80b129748f0a': NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      '1eb25b30-eee8-4e20-9ff3-80b129748f3a': NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      '1ab25b30-eee8-4e20-9ff3-80b129748f3b': NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      '1ac25b30-eee8-4e20-9ff3-80b129748f4b': NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      '1bc25b30-eee8-4e20-9ff3-80b129748f5b': NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      '1bf25b30-eee8-4e20-9ff3-80b129748c5b': NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      '1bf25b30-ecc8-4120-9ff3-80b129748c5b': NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      '1bf25b30-ecc8-cdef-9ff3-80b129748c5b': NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      '0bf25b30-ecc8-cdef-9ff3-80b129748c5d': NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      '1fb25b30-eee8-4e20-9ff3-80b129748f6a': NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      '1bb25b30-eee8-4e20-9ff3-80b129748c3b': NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      '1bc25b30-eee8-4e20-9ff3-80b129748d4b': NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      '1bc76b30-eee8-4e20-9ff3-80b129748c4b': NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      '1bf76b30-eee8-4e20-9ff3-80b129748a4b': NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      '713dd604-93a0-11eb-a8b3-0242ac130003': NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      '713dd852-93a0-11eb-a8b3-0242ac130003': NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      aAnswers: NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      bAnswers: NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required')),
      cAnswers: NumberType(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('message.validation.is_numeric').toString()).isRequired(i18n__WEBPACK_IMPORTED_MODULE_6__["default"].t('common.validation.required'))
    });
    this.form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();

    this.onChange = formValue => {
      this.setState({
        formValue
      });
    };

    this.onCheck = formError => {
      this.setState({
        formError
      });
    };

    this.handleSubmit = action => {
      var _this$form$current;

      const {
        formValue
      } = this.state;
      const {
        onSubmit
      } = this.props;
      if (!((_this$form$current = this.form.current) === null || _this$form$current === void 0 ? void 0 : _this$form$current.check())) return;
      const symptomOverIds = this.getListSymptomOver();
      if (typeof onSubmit === 'function') onSubmit({ ...formValue,
        symptomOverIds,
        action
      });
    };

    this.getListSymptomOver = () => {
      const {
        formValue,
        symptoms
      } = this.state;
      const symptomsOverThreshold = [];
      symptoms.map(symptom => {
        const itemValue = symptom.items.map(item => {
          return formValue[item];
        });

        switch (symptom.id) {
          //3
          case 'a93b2144-5bad-43f6-bbd0-5682fe7bd0c1':
            {
              if (itemValue[0]) {
                if (symptom.items[0] === '713dd604-93a0-11eb-a8b3-0242ac130003') {
                  const isOver = symptom.avg >= symptom.minThreshold && symptom.avg < symptom.maxThreshold;

                  if (isOver == true) {
                    symptomsOverThreshold.push(symptom.id);
                  }
                } else {
                  const isOver = itemValue < symptom.minThreshold && itemValue >= 0;

                  if (isOver == true) {
                    symptomsOverThreshold.push(symptom.id);
                  }
                }
              }

              break;
            }
          //4

          case '359bce52-0baf-4258-af58-1189812e27e1':
            {
              if (itemValue[0]) {
                const isOver = itemValue.some(values => {
                  return values <= 5 && values >= 0;
                });

                if (isOver == true) {
                  symptomsOverThreshold.push(symptom.id);
                }
              }

              break;
            }
          //5

          case '4ca0d876-0fb7-4b0f-905f-1d6fc97f7ccd':
            {
              if (itemValue[0]) {
                const isOver = symptom.avg >= symptom.minThreshold && symptom.avg < symptom.maxThreshold;

                if (isOver == true) {
                  symptomsOverThreshold.push(symptom.id);
                }
              }

              break;
            }
          //6

          case '8de572fd-3c88-440c-9183-d23d628527cd':
            {
              if (itemValue[0]) {
                if (symptom.items[0] === '713dd852-93a0-11eb-a8b3-0242ac130003') {
                  const isOver = symptom.avg < symptom.minThreshold;

                  if (isOver == true) {
                    symptomsOverThreshold.push(symptom.id);
                  }
                } else {
                  const isOver = symptom.avg >= symptom.minThreshold && symptom.avg < symptom.maxThreshold;

                  if (isOver == true) {
                    symptomsOverThreshold.push(symptom.id);
                  }
                }
              }

              break;
            }

          default:
            if (itemValue[0]) {
              const isOver = symptom.avg >= symptom.minThreshold && symptom.avg < symptom.maxThreshold;

              if (isOver == true) {
                symptomsOverThreshold.push(symptom.id);
              }
            }

            break;
        }
      });
      return symptomsOverThreshold;
    };

    this.getTotalSymptomOver = () => {
      const symptomOvers = this.getListSymptomOver();
      return Array.from(new Set(symptomOvers)).length;
    };

    this.calcAvg = (...itemKeys) => {
      if (!itemKeys.length) return 0;
      const {
        formValue
      } = this.state;
      let totalValue = 0;
      itemKeys.map(key => {
        totalValue += Number(formValue[key]) || 0;
      });
      return totalValue > 0 ? Math.floor(totalValue / itemKeys.length) : 0;
    };

    this.isOverThreshold = (...itemKeys) => {
      const {
        symptoms
      } = this.state;
      const existedSymptom = symptoms.find(symptom => Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEqual"])(symptom.items, itemKeys));
      if (!existedSymptom) return false;
      return existedSymptom.avg >= existedSymptom.minThreshold && existedSymptom.avg < existedSymptom.maxThreshold;
    };

    this.isOverThresholdItem = itemKeys => {
      const {
        symptoms,
        formValue
      } = this.state;
      const existedSymptom = symptoms.find(symptom => symptom.items.includes(itemKeys));
      const value = formValue[itemKeys];
      if (!existedSymptom || !value) return false;
      return value >= existedSymptom.minThreshold && value < existedSymptom.maxThreshold;
    };

    this.displayAvg = (...itemKeys) => {
      const {
        symptoms
      } = this.state;
      const existedSymptom = symptoms.find(symptom => Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEqual"])(symptom.items, itemKeys));
      if (!existedSymptom) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        style: {
          fontSize: 20,
          marginLeft: 20
        },
        children: "0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 33
      }, this);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        style: {
          fontSize: 20,
          marginLeft: 20,
          color: this.isOverThreshold(...itemKeys) ? '#f00' : '#000'
        },
        children: existedSymptom.avg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 7
      }, this);
    };

    this.state = {
      formValue: {
        '1eb25b30-eee8-4e20-9ff3-80b129748f0a': '',
        '1eb25b30-eee8-4e20-9ff3-80b129748f3a': '',
        '1ab25b30-eee8-4e20-9ff3-80b129748f3b': '',
        '1ac25b30-eee8-4e20-9ff3-80b129748f4b': '',
        '1bc25b30-eee8-4e20-9ff3-80b129748f5b': '',
        '1bf25b30-eee8-4e20-9ff3-80b129748c5b': '',
        '1bf25b30-ecc8-4120-9ff3-80b129748c5b': '',
        '1bf25b30-ecc8-cdef-9ff3-80b129748c5b': '',
        '0bf25b30-ecc8-cdef-9ff3-80b129748c5d': '',
        '1fb25b30-eee8-4e20-9ff3-80b129748f6a': '',
        '1bb25b30-eee8-4e20-9ff3-80b129748c3b': '',
        '1bc25b30-eee8-4e20-9ff3-80b129748d4b': '',
        '1bc76b30-eee8-4e20-9ff3-80b129748c4b': '',
        '1bf76b30-eee8-4e20-9ff3-80b129748a4b': '',
        '713dd604-93a0-11eb-a8b3-0242ac130003': '',
        '713dd852-93a0-11eb-a8b3-0242ac130003': '',
        '713dd942-93a0-11eb-a8b3-0242ac130003': '',
        aAnswers: '',
        bAnswers: '',
        cAnswers: ''
      },
      formError: {},
      //1
      symptoms: [{
        id: '7015f18b-c78c-4777-a8cd-cc672ed9c5cb',
        name: '口腔衛生状態不良',
        items: ['1eb25b30-eee8-4e20-9ff3-80b129748f0a'],
        avg: 0,
        minThreshold: 9,
        maxThreshold: 19
      }, //2
      {
        id: '83740616-38c9-446a-9f0f-d0ee4ceff279',
        name: '口腔乾燥',
        items: ['1eb25b30-eee8-4e20-9ff3-80b129748f3a', '1ab25b30-eee8-4e20-9ff3-80b129748f3b', '1ac25b30-eee8-4e20-9ff3-80b129748f4b'],
        avg: 0,
        minThreshold: 0,
        maxThreshold: 27
      }, {
        id: '83740616-38c9-446a-9f0f-d0ee4ceff279',
        name: '口腔乾燥',
        items: ['1bc25b30-eee8-4e20-9ff3-80b129748f5b'],
        avg: 0,
        minThreshold: 0,
        maxThreshold: 2
      }, //3
      {
        id: 'a93b2144-5bad-43f6-bbd0-5682fe7bd0c1',
        name: '咬合力低下',
        items: ['713dd604-93a0-11eb-a8b3-0242ac130003'],
        avg: 0,
        minThreshold: 0,
        maxThreshold: 201
      }, {
        id: 'a93b2144-5bad-43f6-bbd0-5682fe7bd0c1',
        name: '咬合力低下',
        items: ['1bf25b30-eee8-4e20-9ff3-80b129748c5b'],
        avg: 0,
        minThreshold: 21,
        maxThreshold: 35
      }, //4
      {
        id: '359bce52-0baf-4258-af58-1189812e27e1',
        name: '舌口唇運動機能低下',
        items: ['1bf25b30-ecc8-4120-9ff3-80b129748c5b', '1bf25b30-ecc8-cdef-9ff3-80b129748c5b', '0bf25b30-ecc8-cdef-9ff3-80b129748c5d'],
        avg: 0,
        minThreshold: 0,
        maxThreshold: 6
      }, //5
      {
        id: '4ca0d876-0fb7-4b0f-905f-1d6fc97f7ccd',
        name: '低舌圧',
        items: ['1fb25b30-eee8-4e20-9ff3-80b129748f6a', '1bb25b30-eee8-4e20-9ff3-80b129748c3b', '1bc25b30-eee8-4e20-9ff3-80b129748d4b'],
        avg: 0,
        minThreshold: 0,
        maxThreshold: 30
      }, //6
      {
        id: '8de572fd-3c88-440c-9183-d23d628527cd',
        name: '咀嚼機能低下',
        items: ['1bc76b30-eee8-4e20-9ff3-80b129748c4b'],
        avg: 0,
        minThreshold: 0,
        maxThreshold: 100
      }, {
        id: '8de572fd-3c88-440c-9183-d23d628527cd',
        name: '咀嚼機能低下',
        items: ['713dd852-93a0-11eb-a8b3-0242ac130003'],
        avg: 0,
        minThreshold: 0,
        maxThreshold: 3
      }, //7
      {
        id: 'de966595-acfd-496b-bba6-bf2b53e32f8c',
        name: '嚥下機能的',
        items: ['1bf76b30-eee8-4e20-9ff3-80b129748a4b'],
        avg: 0,
        minThreshold: 4,
        maxThreshold: 41
      }, {
        id: 'de966595-acfd-496b-bba6-bf2b53e32f8c',
        name: '嚥下機能的',
        items: ['aAnswers', 'bAnswers', 'cAnswers'],
        avg: 0,
        minThreshold: 1,
        maxThreshold: 16
      }],
      chartOptions: {
        tooltip: {},
        radar: {
          indicator: []
        },
        series: [{
          type: 'radar',
          data: []
        }]
      }
    };
  }

  componentDidMount() {
    const {
      totalData
    } = this.props;

    if (totalData && totalData.inspectionData) {
      this.setState({
        formValue: { ...totalData.inspectionData,
          '1bf76b30-eee8-4e20-9ff3-80b129748a4b': (totalData === null || totalData === void 0 ? void 0 : totalData.surveysEAT10totalPoint) || 0
        }
      });
    } else {
      this.setState({
        formValue: { ...this.state.formValue,
          '1bf76b30-eee8-4e20-9ff3-80b129748a4b': (totalData === null || totalData === void 0 ? void 0 : totalData.surveysEAT10totalPoint) || 0
        }
      });
    }
  }

  componentDidUpdate(prevProps, prevSate) {
    const {
      formValue,
      symptoms
    } = this.state;
    const chartOptions = {
      tooltip: {},
      radar: {
        indicator: []
      },
      series: [{
        type: 'radar',
        data: [{
          name: '検査登録',
          value: []
        }]
      }]
    };

    if (prevSate.formValue !== formValue) {
      symptoms.map(symptom => {
        symptom.avg = this.calcAvg(...symptom.items);
        if (symptom.items.includes('1bc25b30-eee8-4e20-9ff3-80b129748f5b')) return;
        if (symptom.items.includes('713dd604-93a0-11eb-a8b3-0242ac130003')) return;
        if (symptom.items.includes('713dd852-93a0-11eb-a8b3-0242ac130003')) return;
        if (symptom.items.includes('aAnswers')) return;
        const itemValue = symptom.items.map(item => {
          return formValue[item];
        });

        switch (symptom.id) {
          //1
          case '7015f18b-c78c-4777-a8cd-cc672ed9c5cb':
            {
              const symptomPoint = (symptom.avg / 18 * 100).toFixed(2);
              const symptomPointNumber = Number(symptomPoint);
              const notOver = 0 <= symptomPointNumber && symptomPointNumber <= 49;
              let max = 0;

              if (formValue['1eb25b30-eee8-4e20-9ff3-80b129748f0a']) {
                switch (true) {
                  case 0 <= symptomPointNumber && symptomPointNumber <= 49.99:
                    {
                      max = 5;
                      break;
                    }

                  case 50 <= symptomPointNumber && symptomPointNumber <= 62.99:
                    {
                      max = 4;
                      break;
                    }

                  case 63 <= symptomPointNumber && symptomPointNumber <= 75.99:
                    {
                      max = 3;
                      break;
                    }

                  case 76 <= symptomPointNumber && symptomPointNumber <= 88.99:
                    {
                      max = 2;
                      break;
                    }

                  case 89 <= symptomPointNumber && symptomPointNumber <= 100:
                    {
                      max = 1;
                      break;
                    }
                }
              }

              chartOptions.radar.indicator.push({
                name: `${symptom.name}`,
                max: 5,
                color: !notOver ? 'red' : ''
              });
              chartOptions.series[0].data[0].value.push(max);
              break;
            }
          //2

          case '83740616-38c9-446a-9f0f-d0ee4ceff279':
            {
              const prioritySymptom = formValue['1bc25b30-eee8-4e20-9ff3-80b129748f5b'];
              const convertPrioritySymptomNumber = Number(prioritySymptom || 0).toFixed(2);
              const isOver = symptom.avg >= symptom.minThreshold && symptom.avg < symptom.maxThreshold;
              const isOverPrioritySymptom = Number(convertPrioritySymptomNumber) >= 0 && Number(convertPrioritySymptomNumber) < 2;

              const hasValue = item => formValue[item];

              const hasAllValueItem = symptom.items.some(hasValue);
              let max = 0;

              if (isOverPrioritySymptom && !isOver || !hasAllValueItem) {
                if (prioritySymptom) {
                  switch (true) {
                    case Number(convertPrioritySymptomNumber) >= 2:
                      {
                        max = 5;
                        break;
                      }

                    case Number(convertPrioritySymptomNumber) >= 1.44 && Number(convertPrioritySymptomNumber) <= 1.99:
                      {
                        max = 4;
                        break;
                      }

                    case Number(convertPrioritySymptomNumber) >= 0.96 && Number(convertPrioritySymptomNumber) <= 1.43:
                      {
                        max = 3;
                        break;
                      }

                    case Number(convertPrioritySymptomNumber) >= 0.47 && Number(convertPrioritySymptomNumber) <= 0.95:
                      {
                        max = 2;
                        break;
                      }

                    case Number(convertPrioritySymptomNumber) >= 0 && Number(convertPrioritySymptomNumber) <= 0.46:
                      {
                        max = 1;
                        break;
                      }
                  }
                }

                chartOptions.radar.indicator.push({
                  name: `${symptom.name}`,
                  max: 5,
                  color: prioritySymptom && isOverPrioritySymptom ? 'red' : ''
                });
                chartOptions.series[0].data[0].value.push(max);
              } else {
                if (hasAllValueItem) {
                  switch (true) {
                    case symptom.avg >= 27:
                      {
                        max = 5;
                        break;
                      }

                    case symptom.avg >= 21 && symptom.avg <= 26:
                      {
                        max = 4;
                        break;
                      }

                    case symptom.avg >= 14 && symptom.avg <= 20:
                      {
                        max = 3;
                        break;
                      }

                    case symptom.avg >= 7 && symptom.avg <= 13:
                      {
                        max = 2;
                        break;
                      }

                    case symptom.avg >= 0 && symptom.avg <= 6:
                      {
                        max = 1;
                        break;
                      }
                  }
                }

                chartOptions.radar.indicator.push({
                  name: `${symptom.name}`,
                  max: 5,
                  color: hasAllValueItem && isOver ? 'red' : ''
                });
                chartOptions.series[0].data[0].value.push(max);
              }

              break;
            }
          //3

          case 'a93b2144-5bad-43f6-bbd0-5682fe7bd0c1':
            {
              const prioritySymptom = formValue['713dd604-93a0-11eb-a8b3-0242ac130003'];
              const isOverPrioritySymptom = prioritySymptom && Number(prioritySymptom) >= 0 && Number(prioritySymptom) <= 200;
              const isOver = symptom.avg < symptom.minThreshold;
              const selectField = !itemValue[0] || isOverPrioritySymptom && !isOver;

              if (selectField) {
                let max = 0;

                if (prioritySymptom) {
                  switch (true) {
                    case Number(prioritySymptom) >= 201:
                      {
                        max = 5;
                        break;
                      }

                    case Number(prioritySymptom) >= 151 && Number(prioritySymptom) <= 200:
                      {
                        max = 4;
                        break;
                      }

                    case Number(prioritySymptom) >= 101 && Number(prioritySymptom) <= 150:
                      {
                        max = 3;
                        break;
                      }

                    case Number(prioritySymptom) >= 51 && Number(prioritySymptom) <= 100:
                      {
                        max = 2;
                        break;
                      }

                    case Number(prioritySymptom) >= 0 && Number(prioritySymptom) <= 50:
                      {
                        max = 1;
                        break;
                      }
                  }
                }

                chartOptions.radar.indicator.push({
                  // name: `${symptom.name}\n${prioritySymptom | 0}`,
                  name: `${symptom.name}`,
                  max: 5,
                  color: isOverPrioritySymptom ? 'red' : ''
                });
                chartOptions.series[0].data[0].value.push(max);
              } else {
                let max = 0;

                if (formValue['1bf25b30-eee8-4e20-9ff3-80b129748c5b']) {
                  switch (true) {
                    case symptom.avg >= 21:
                      {
                        max = 5;
                        break;
                      }

                    case symptom.avg >= 16 && symptom.avg <= 20:
                      {
                        max = 4;
                        break;
                      }

                    case symptom.avg >= 11 && symptom.avg <= 15:
                      {
                        max = 3;
                        break;
                      }

                    case symptom.avg >= 6 && symptom.avg <= 10:
                      {
                        max = 2;
                        break;
                      }

                    case symptom.avg >= 0 && symptom.avg <= 5:
                      {
                        max = 1;
                        break;
                      }
                  }

                  chartOptions.radar.indicator.push({
                    // name: `${symptom.name}\n${symptom.avg}`,
                    name: `${symptom.name}`,
                    max: 5,
                    color: isOver ? 'red' : ''
                  });
                  chartOptions.series[0].data[0].value.push(max);
                }
              }

              break;
            }
          //4

          case '359bce52-0baf-4258-af58-1189812e27e1':
            {
              if (itemValue[0] || itemValue[1] || itemValue[2]) {
                const isOver = itemValue.some(values => {
                  return values >= 0 && values <= 5;
                });
                let max = 0;

                switch (true) {
                  case !isOver:
                    {
                      max = 5;
                      break;
                    }
                }

                chartOptions.radar.indicator.push({
                  // name: `${symptom.name}\n${symptom.avg}`,
                  name: `${symptom.name}`,
                  max: 5,
                  color: isOver ? 'red' : ''
                });
                chartOptions.series[0].data[0].value.push(max);
              } else {
                chartOptions.radar.indicator.push({
                  // name: `${symptom.name}\n${symptom.avg}`,
                  name: `${symptom.name}`,
                  max: 5,
                  color: ''
                });
                chartOptions.series[0].data[0].value.push(symptom.avg);
              }

              break;
            }
          //5

          case '4ca0d876-0fb7-4b0f-905f-1d6fc97f7ccd':
            {
              if (itemValue[0] || itemValue[1] || itemValue[2]) {
                const isOver = itemValue.some(values => {
                  return values <= 5 && values >= 0 || symptom.avg < 30;
                });
                let max = 0;

                switch (true) {
                  case symptom.avg >= 30:
                    {
                      max = 5;
                      break;
                    }

                  case symptom.avg >= 22 && symptom.avg <= 29:
                    {
                      max = 4;
                      break;
                    }

                  case symptom.avg >= 14 && symptom.avg <= 21:
                    {
                      max = 3;
                      break;
                    }

                  case symptom.avg >= 7 && symptom.avg <= 13:
                    {
                      max = 2;
                      break;
                    }

                  case symptom.avg >= 0 && symptom.avg <= 6:
                    {
                      max = 1;
                      break;
                    }
                }

                chartOptions.radar.indicator.push({
                  // name: `${symptom.name}\n${symptom.avg}`,
                  name: `${symptom.name}`,
                  max: 5,
                  color: isOver ? 'red' : ''
                });
                chartOptions.series[0].data[0].value.push(max);
              } else {
                chartOptions.radar.indicator.push({
                  // name: `${symptom.name}\n${symptom.avg}`,
                  name: `${symptom.name}`,
                  max: 5,
                  color: ''
                });
                chartOptions.series[0].data[0].value.push(0);
              }

              break;
            }
          //6

          case '8de572fd-3c88-440c-9183-d23d628527cd':
            {
              const prioritySymptom = formValue['713dd852-93a0-11eb-a8b3-0242ac130003'];
              const isOvePrioritySymptom = Number(prioritySymptom) >= 0 && Number(prioritySymptom) <= 2;
              const isOver = symptom.avg >= symptom.minThreshold && symptom.avg < symptom.maxThreshold;
              const selectField = !itemValue[0] || isOvePrioritySymptom && !isOver;

              if (!selectField) {
                let max = 0;

                if (formValue['1bc76b30-eee8-4e20-9ff3-80b129748c4b']) {
                  switch (true) {
                    case symptom.avg >= 100:
                      {
                        max = 5;
                        break;
                      }

                    case symptom.avg >= 76 && symptom.avg <= 99:
                      {
                        max = 4;
                        break;
                      }

                    case symptom.avg >= 51 && symptom.avg <= 75:
                      {
                        max = 3;
                        break;
                      }

                    case symptom.avg >= 26 && symptom.avg <= 50:
                      {
                        max = 2;
                        break;
                      }

                    case symptom.avg >= 0 && symptom.avg <= 25:
                      {
                        max = 1;
                        break;
                      }
                  }
                }

                chartOptions.radar.indicator.push({
                  // name: `${symptom.name}\n${symptom.avg}`,
                  name: `${symptom.name}`,
                  max: 5,
                  color: isOver ? 'red' : ''
                });
                chartOptions.series[0].data[0].value.push(max);
              } else {
                let max = 0;

                if (prioritySymptom) {
                  switch (true) {
                    case Number(prioritySymptom) >= 3:
                      {
                        max = 5;
                        break;
                      }

                    case Number(prioritySymptom) === 2:
                      {
                        max = 4;
                        break;
                      }

                    case Number(prioritySymptom) === 1:
                      {
                        max = 3;
                        break;
                      }

                    case Number(prioritySymptom) === 0:
                      {
                        max = 1;
                        break;
                      }
                  }
                }

                chartOptions.radar.indicator.push({
                  // name: `${symptom.name}\n${prioritySymptom || 0} `,
                  name: `${symptom.name}`,
                  max: 5,
                  color: isOvePrioritySymptom ? 'red' : ''
                });
                chartOptions.series[0].data[0].value.push(max);
              }

              break;
            }
          //7

          case 'de966595-acfd-496b-bba6-bf2b53e32f8c':
            {
              const prioritySymptom = formValue['1bf76b30-eee8-4e20-9ff3-80b129748a4b'];
              const isOver = symptom.avg >= symptom.minThreshold;
              const aAnswers = formValue['aAnswers'];
              const bAnswers = formValue['bAnswers'];
              const cAnswers = formValue['cAnswers'];
              let isOverAnswers = false;

              if (aAnswers && bAnswers && cAnswers) {
                switch (true) {
                  case Number(aAnswers) === 0 && Number(bAnswers) === 0:
                    {
                      isOverAnswers = false;
                      break;
                    }

                  case Number(aAnswers) >= 0 && Number(bAnswers) === 0:
                    {
                      isOverAnswers = true;
                      break;
                    }

                  case Number(bAnswers) >= 0:
                    {
                      isOverAnswers = true;
                      break;
                    }
                }
              }

              const selectField = !prioritySymptom || isOverAnswers && !isOver;

              if (!selectField) {
                let max = 0;

                switch (true) {
                  case symptom.avg >= 33 && symptom.avg <= 40:
                    {
                      max = 1;
                      break;
                    }

                  case symptom.avg >= 24 && symptom.avg <= 32:
                    {
                      max = 2;
                      break;
                    }

                  case symptom.avg >= 14 && symptom.avg <= 23:
                    {
                      max = 3;
                      break;
                    }

                  case symptom.avg >= 4 && symptom.avg <= 13:
                    {
                      max = 4;
                      break;
                    }

                  case symptom.avg >= 0 && symptom.avg <= 3:
                    {
                      max = 5;
                      break;
                    }
                }

                chartOptions.radar.indicator.push({
                  // name: `${symptom.name}\n${symptom.avg}`,
                  name: `${symptom.name}`,
                  max: 5,
                  color: isOver ? 'red' : ''
                });
                chartOptions.series[0].data[0].value.push(max);
              } else {
                let max = 0;

                if (aAnswers && bAnswers && cAnswers) {
                  switch (true) {
                    case Number(aAnswers) === 0 && Number(bAnswers) === 0:
                      {
                        max = 5;
                        break;
                      }

                    case Number(aAnswers) >= 0 && Number(bAnswers) === 0:
                      {
                        max = 3;
                        break;
                      }

                    case Number(bAnswers) >= 0:
                      {
                        max = 1;
                        break;
                      }
                  }
                }

                chartOptions.radar.indicator.push({
                  // name: `${symptom.name}\n${symptom.avg}`,
                  name: `${symptom.name}`,
                  max: 5,
                  color: isOverAnswers ? 'red' : ''
                });
                chartOptions.series[0].data[0].value.push(max);
              }

              break;
            }
        }
      });
      this.setState({
        symptoms,
        chartOptions
      });
    }
  }

  render() {
    const {
      formValue,
      formError,
      chartOptions
    } = this.state;
    const {
      t,
      currentPatient
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "inspection_edit",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_SmallHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: `${currentPatient === null || currentPatient === void 0 ? void 0 : currentPatient.code} ${currentPatient === null || currentPatient === void 0 ? void 0 : currentPatient.firstName} ${currentPatient === null || currentPatient === void 0 ? void 0 : currentPatient.lastName} - 検査登録 `
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 859,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "inspection_edit_wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "inspection_edit_wrapper--content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rsuite__WEBPACK_IMPORTED_MODULE_2__["Form"], {
            ref: this.form,
            formValue: formValue,
            formError: formError,
            model: this.model,
            onChange: this.onChange,
            onCheck: this.onCheck,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rsuite__WEBPACK_IMPORTED_MODULE_2__["Row"], {
              gutter: 50,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rsuite__WEBPACK_IMPORTED_MODULE_2__["Col"], {
                sm: 24,
                md: 10,
                xs: 24,
                className: "inspection_edit_wrapper--content_col",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "inspection_edit_wrapper--content_col-title",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "inspection_edit_wrapper--content_col-title__number",
                    children: "1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 875,
                    columnNumber: 21
                  }, this), " \u53E3\u8154\u885B\u751F\u72B6\u614B\u4E0D\u826F"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 874,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "inspection_edit_wrapper--content-field",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    style: {
                      marginRight: 10
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "\u820C\u82D4\u306E\u4ED8\u7740\u7A0B\u5EA6",
                      name: "1eb25b30-eee8-4e20-9ff3-80b129748f0a",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThreshold('1eb25b30-eee8-4e20-9ff3-80b129748f0a') ? 'over-threshold' : ''}`,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      errorClassName: "inspection_edit_wrapper--content_error",
                      placeholder: "\u820C\u82D4\u306E\u4ED8\u7740\u7A0B\u5EA6",
                      formError: formError,
                      min: 0,
                      max: 18
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 879,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "inspection_edit_wrapper-unit",
                      style: {
                        marginLeft: 10,
                        width: 40
                      },
                      children: "\u70B9"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 891,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 878,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 877,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "inspection_edit_wrapper--content_col-title",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "inspection_edit_wrapper--content_col-title__number",
                    children: "2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 897,
                    columnNumber: 21
                  }, this), " \u53E3\u8154\u4E7E\u71E5"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 896,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  className: "inspection_edit_wrapper--content_col-subtitle",
                  children: "\u53E3\u8154\u7C98\u819C\u6E7F\u7D14\u5EA6(\u30E0\u30FC\u30AB\u30B9)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 899,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "inspection_edit_wrapper--content-field",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    style: {
                      marginRight: 30
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "1\u56DE\u76EE",
                      name: "1eb25b30-eee8-4e20-9ff3-80b129748f3a",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThresholdItem('1eb25b30-eee8-4e20-9ff3-80b129748f3a') ? 'over-threshold' : ''}`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      placeholder: "1\u56DE\u76EE",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 902,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 901,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    style: {
                      marginRight: 30
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "2\u56DE\u76EE",
                      name: "1ab25b30-eee8-4e20-9ff3-80b129748f3b",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThresholdItem('1ab25b30-eee8-4e20-9ff3-80b129748f3b') ? 'over-threshold' : ''}`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      placeholder: "2\u56DE\u76EE",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 919,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 918,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "3\u56DE\u76EE",
                      name: "1ac25b30-eee8-4e20-9ff3-80b129748f4b",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThresholdItem('1ac25b30-eee8-4e20-9ff3-80b129748f4b') ? 'over-threshold' : ''}`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      placeholder: "3\u56DE\u76EE",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 936,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 935,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 900,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  className: "inspection_edit_wrapper--content_col-subtitle",
                  children: ["\u5E73\u5747:", ' ', this.displayAvg('1eb25b30-eee8-4e20-9ff3-80b129748f3a', '1ab25b30-eee8-4e20-9ff3-80b129748f3b', '1ac25b30-eee8-4e20-9ff3-80b129748f4b')]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 953,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "inspection_edit_wrapper--content-field",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    style: {
                      marginRight: 10
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "\u553E\u6DB2\u91CF",
                      name: "1bc25b30-eee8-4e20-9ff3-80b129748f5b",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThreshold('1bc25b30-eee8-4e20-9ff3-80b129748f5b') ? 'over-threshold' : ''}`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      placeholder: "\u553E\u6DB2\u91CF",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 963,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "inspection_edit_wrapper-unit",
                      style: {
                        marginLeft: 10,
                        width: 60
                      },
                      children: "g/2\u5206"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 974,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 962,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 961,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "inspection_edit_wrapper--content_col-title",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "inspection_edit_wrapper--content_col-title__number",
                    children: "3"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 980,
                    columnNumber: 21
                  }, this), " \u54AC\u5408\u529B\u4F4E\u4E0B"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 979,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "inspection_edit_wrapper--content-field",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    style: {
                      marginRight: 10
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "\u54AC\u5408\u529B\u691C\u67FB",
                      name: "713dd604-93a0-11eb-a8b3-0242ac130003",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThreshold('713dd604-93a0-11eb-a8b3-0242ac130003') ? 'over-threshold' : ''}`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      placeholder: "\u54AC\u5408\u529B\u691C\u67FB",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 984,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "inspection_edit_wrapper-unit",
                      style: {
                        marginLeft: 10,
                        width: 40
                      },
                      children: "N"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 995,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 983,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 982,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "inspection_edit_wrapper--content-field",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    style: {
                      marginRight: 10
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "\u6B8B\u5B58\u6B6F\u6570",
                      name: "1bf25b30-eee8-4e20-9ff3-80b129748c5b",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThreshold('1bf25b30-eee8-4e20-9ff3-80b129748c5b') ? '' : 'over-threshold'}`,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      errorClassName: "inspection_edit_wrapper--content_error",
                      placeholder: "\u6B8B\u5B58\u6B6F\u6570",
                      formError: formError,
                      min: 0,
                      max: 34
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1002,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "inspection_edit_wrapper-unit",
                      style: {
                        marginLeft: 10,
                        width: 40
                      },
                      children: "\u672C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1014,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1001,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1000,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 873,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rsuite__WEBPACK_IMPORTED_MODULE_2__["Col"], {
                sm: 24,
                md: 14,
                xs: 24,
                className: "inspection_edit_wrapper--content_col",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "inspection_edit_wrapper--content_col-title",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "inspection_edit_wrapper--content_col-title__number",
                    children: "4"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1022,
                    columnNumber: 21
                  }, this), " \u820C\u53E3\u5507\u904B\u52D5\u6A5F\u80FD\u4F4E\u4E0B"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1021,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  className: "inspection_edit_wrapper--content_col-subtitle",
                  children: "\u30AA\u30FC\u30E9\u30EB\u30C7\u30A3\u30A2\u30C9\u30B3\u30AD\u30CD\u30B7\u30B9"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1024,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "inspection_edit_wrapper--content-field",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    style: {
                      marginRight: 10
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "pa",
                      name: "1bf25b30-ecc8-4120-9ff3-80b129748c5b",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThresholdItem('1bf25b30-ecc8-4120-9ff3-80b129748c5b') ? 'over-threshold' : ''}`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      placeholder: "pa",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1027,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "inspection_edit_wrapper-unit",
                      style: {
                        marginLeft: 10,
                        width: 70
                      },
                      children: "\u56DE/\u79D2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1042,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1026,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    style: {
                      marginRight: 10
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "ta",
                      name: "1bf25b30-ecc8-cdef-9ff3-80b129748c5b",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThresholdItem('1bf25b30-ecc8-cdef-9ff3-80b129748c5b') ? 'over-threshold' : ''}`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      placeholder: "ta",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1047,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "inspection_edit_wrapper-unit",
                      style: {
                        marginLeft: 10,
                        width: 70
                      },
                      children: "\u56DE/\u79D2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1062,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1046,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    style: {
                      marginRight: 10
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "ka",
                      name: "0bf25b30-ecc8-cdef-9ff3-80b129748c5d",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThresholdItem('0bf25b30-ecc8-cdef-9ff3-80b129748c5d') ? 'over-threshold' : ''}`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      placeholder: "ka",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1067,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "inspection_edit_wrapper-unit",
                      style: {
                        marginLeft: 10,
                        width: 70
                      },
                      children: "\u56DE/\u79D2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1082,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1066,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1025,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "inspection_edit_wrapper--content_col-title",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "inspection_edit_wrapper--content_col-title__number",
                    children: "5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1088,
                    columnNumber: 21
                  }, this), " \u4F4E\u820C\u5727"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1087,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  className: "inspection_edit_wrapper--content_col-subtitle",
                  children: "\u820C\u5727\u691C\u67FB"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1090,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "inspection_edit_wrapper--content-field",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    style: {
                      marginRight: 20
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "1\u56DE\u76EE",
                      name: "1fb25b30-eee8-4e20-9ff3-80b129748f6a",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThresholdItem('1fb25b30-eee8-4e20-9ff3-80b129748f6a') ? 'over-threshold' : ''}`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      placeholder: "1\u56DE\u76EE",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1093,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1092,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    style: {
                      marginRight: 20
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "2\u56DE\u76EE",
                      name: "1bb25b30-eee8-4e20-9ff3-80b129748c3b",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThresholdItem('1bb25b30-eee8-4e20-9ff3-80b129748c3b') ? 'over-threshold' : ''}`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      placeholder: "2\u56DE\u76EE",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1110,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1109,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    style: {
                      marginRight: 20
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "3\u56DE\u76EE",
                      name: "1bc25b30-eee8-4e20-9ff3-80b129748d4b",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThresholdItem('1bc25b30-eee8-4e20-9ff3-80b129748d4b') ? 'over-threshold' : ''}`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      placeholder: "3\u56DE\u76EE",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1127,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1126,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1091,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  className: "inspection_edit_wrapper--content_col-subtitle",
                  children: ["\u5E73\u5747:", ' ', this.displayAvg('1fb25b30-eee8-4e20-9ff3-80b129748f6a', '1bb25b30-eee8-4e20-9ff3-80b129748c3b', '1bc25b30-eee8-4e20-9ff3-80b129748d4b')]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1144,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "inspection_edit_wrapper--content_col-title",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "inspection_edit_wrapper--content_col-title__number",
                    children: "6"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1153,
                    columnNumber: 21
                  }, this), " \u5480\u56BC\u6A5F\u80FD\u4F4E\u4E0B"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1152,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "inspection_edit_wrapper--content-field",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    style: {
                      marginRight: 10
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "\u5480\u56BC\u80FD\u529B\u691C\u67FB",
                      name: "1bc76b30-eee8-4e20-9ff3-80b129748c4b",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThreshold('1bc76b30-eee8-4e20-9ff3-80b129748c4b') ? 'over-threshold' : ''}`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      placeholder: "\u5480\u56BC\u80FD\u529B\u691C\u67FB",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1157,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "inspection_edit_wrapper-unit",
                      style: {
                        marginLeft: 10,
                        width: 60
                      },
                      children: "mg/dL"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1168,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1156,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1155,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "inspection_edit_wrapper--content-field",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    style: {
                      marginRight: 10
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "\u5480\u56BC\u80FD\u529B\u30B9\u30B3\u30A2\u6CD5",
                      name: "713dd852-93a0-11eb-a8b3-0242ac130003",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThreshold('713dd852-93a0-11eb-a8b3-0242ac130003') ? '' : 'over-threshold'}`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      placeholder: "\u5480\u56BC\u80FD\u529B\u30B9\u30B3\u30A2\u6CD5",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0,
                      max: 9
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1175,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "inspection_edit_wrapper-unit",
                      style: {
                        marginLeft: 10,
                        width: 60
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1187,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1174,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1173,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "inspection_edit_wrapper--content_col-title",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "inspection_edit_wrapper--content_col-title__number",
                    children: "7"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1191,
                    columnNumber: 21
                  }, this), " \u56A5\u4E0B\u6A5F\u80FD\u7684"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1190,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "inspection_edit_wrapper--content-field",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    style: {
                      marginRight: 10
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      disabled: true,
                      label: "\u56A5\u4E0B\u30B9\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u691C\u67FB",
                      name: "1bf76b30-eee8-4e20-9ff3-80b129748a4b",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThreshold('1bf76b30-eee8-4e20-9ff3-80b129748a4b') ? 'over-threshold' : ''}`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      placeholder: "\u56A5\u4E0B\u30B9\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u691C\u67FB",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0,
                      max: 40
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1195,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "inspection_edit_wrapper-unit",
                      style: {
                        marginLeft: 10,
                        width: 60
                      },
                      children: "\u70B9"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1208,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1194,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1193,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "inspection_edit_wrapper--content-field",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "A",
                      name: "aAnswers",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThresholdItem('aAnswers') ? 'over-threshold' : ''}`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0,
                      max: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1215,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "inspection_edit_wrapper-unit",
                      style: {
                        marginLeft: 10,
                        width: 60
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1226,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1214,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "B",
                      name: "bAnswers",
                      className: `inspection_edit_wrapper--content_input ${this.isOverThresholdItem('bAnswers') ? 'over-threshold' : ''}`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0,
                      max: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1229,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "inspection_edit_wrapper-unit",
                      style: {
                        marginLeft: 10,
                        width: 60
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1240,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1228,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inspection_edit_wrapper--content-field",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Common_Form_CustomField__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      label: "C",
                      name: "cAnswers",
                      className: `inspection_edit_wrapper--content_input`,
                      errorClassName: "inspection_edit_wrapper--content_error",
                      formError: formError,
                      accepter: rsuite__WEBPACK_IMPORTED_MODULE_2__["InputNumber"],
                      min: 0,
                      max: 15
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1243,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "inspection_edit_wrapper-unit",
                      style: {
                        marginLeft: 10,
                        width: 60
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1253,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1242,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1213,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1020,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 872,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 864,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 10
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rsuite__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              style: {
                paddingRight: 40,
                paddingLeft: 40
              },
              appearance: "primary",
              onClick: () => this.handleSubmit('back'),
              children: `<< 戻る`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1260,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rsuite__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              style: {
                paddingRight: 40,
                paddingLeft: 40
              },
              appearance: "primary",
              onClick: () => this.handleSubmit('submit'),
              children: t('button.submit')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1267,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1259,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 863,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "inspection_edit_wrapper--chart",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "inspection_edit_wrapper--chart_score",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "inspection_edit_wrapper--chart_score__text",
              children: "\u8A72\u5F53\u75C7\u72B6\u6570"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1278,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "inspection_edit_wrapper--chart_score__number",
              children: this.getTotalSymptomOver()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1279,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "inspection_edit_wrapper--chart_score__text",
              children: "\u9805\u76EE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1280,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1277,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "inspection_edit_wrapper--chart_content",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(echarts_for_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
              option: chartOptions,
              opts: {
                renderer: 'svg'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1283,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1282,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1276,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 862,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 858,
      columnNumber: 7
    }, this);
  }

}

const mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_11__["createStructuredSelector"])({
  latestExaminationDate: containers_Examination_selector__WEBPACK_IMPORTED_MODULE_12__["selectExaminationLatest"]
});
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_9__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps), Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])())(SimpleModeInspection));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=12.f22398abeaf58ba8127a.hot-update.js.map