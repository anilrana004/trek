import { r as reactExports, d as React, j as jsxRuntimeExports, e as useInternetIdentity, u as useParams, L as Link } from "./index-RYfA8Irf.js";
import { u as useActor, c as createActor, a as useQuery } from "./backend-BbHTL8oc.js";
import { A as AnimatePresence } from "./index-7X9Dx_xk.js";
import { m as motion } from "./proxy-B5-_tyRn.js";
import { a as allTrips, T as TripCard } from "./trips-Dg0_nTXB.js";
function useBooking() {
  const { actor } = useActor(createActor);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const submitBooking = async (input) => {
    if (!actor) {
      setError("Not connected. Please try again.");
      return null;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      const result = await actor.submitBookingRequest(input);
      return result;
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Booking failed. Please try again.";
      setError(msg);
      return null;
    } finally {
      setIsSubmitting(false);
    }
  };
  return { submitBooking, isSubmitting, error };
}
var isCheckBoxInput = (element) => element.type === "checkbox";
var isDateObject = (value) => value instanceof Date;
var isNullOrUndefined = (value) => value == null;
const isObjectType = (value) => typeof value === "object";
var isObject = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
var getEventValue = (event) => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));
var isPlainObject = (tempObject) => {
  const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
  return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
};
var isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
function cloneObject(data) {
  if (data instanceof Date) {
    return new Date(data);
  }
  const isFileListInstance = typeof FileList !== "undefined" && data instanceof FileList;
  if (isWeb && (data instanceof Blob || isFileListInstance)) {
    return data;
  }
  const isArray = Array.isArray(data);
  if (!isArray && !(isObject(data) && isPlainObject(data))) {
    return data;
  }
  const copy = isArray ? [] : Object.create(Object.getPrototypeOf(data));
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      copy[key] = cloneObject(data[key]);
    }
  }
  return copy;
}
var isKey = (value) => /^\w*$/.test(value);
var isUndefined = (val) => val === void 0;
var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
var stringToPath = (input) => compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
var get = (object, path, defaultValue) => {
  if (!path || !isObject(object)) {
    return defaultValue;
  }
  const result = (isKey(path) ? [path] : stringToPath(path)).reduce((result2, key) => isNullOrUndefined(result2) ? result2 : result2[key], object);
  return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
};
var isBoolean = (value) => typeof value === "boolean";
var isFunction = (value) => typeof value === "function";
var set = (object, path, value) => {
  let index = -1;
  const tempPath = isKey(path) ? [path] : stringToPath(path);
  const length = tempPath.length;
  const lastIndex = length - 1;
  while (++index < length) {
    const key = tempPath[index];
    let newValue = value;
    if (index !== lastIndex) {
      const objValue = object[key];
      newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
    }
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return;
    }
    object[key] = newValue;
    object = object[key];
  }
};
const EVENTS = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  SUBMIT: "submit",
  TRIGGER: "trigger",
  VALID: "valid"
};
const VALIDATION_MODE = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
};
const INPUT_VALIDATION_RULES = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
const FORM_ERROR_TYPE = "form";
const ROOT_ERROR_TYPE = "root";
const HookFormControlContext = React.createContext(null);
HookFormControlContext.displayName = "HookFormControlContext";
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
  const result = {
    defaultValues: control._defaultValues
  };
  for (const key in formState) {
    Object.defineProperty(result, key, {
      get: () => {
        const _key = key;
        if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
          control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
        }
        return formState[_key];
      }
    });
  }
  return result;
};
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
var isString = (value) => typeof value === "string";
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
  if (isString(names)) {
    isGlobal && _names.watch.add(names);
    return get(formValues, names, defaultValue);
  }
  if (Array.isArray(names)) {
    return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
  }
  isGlobal && (_names.watchAll = true);
  return formValues;
};
var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);
function deepEqual(object1, object2, _internal_visited = /* @__PURE__ */ new WeakSet()) {
  if (isPrimitive(object1) || isPrimitive(object2)) {
    return Object.is(object1, object2);
  }
  if (isDateObject(object1) && isDateObject(object2)) {
    return Object.is(object1.getTime(), object2.getTime());
  }
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  if (_internal_visited.has(object1) || _internal_visited.has(object2)) {
    return true;
  }
  _internal_visited.add(object1);
  _internal_visited.add(object2);
  for (const key of keys1) {
    const val1 = object1[key];
    if (!keys2.includes(key)) {
      return false;
    }
    if (key !== "ref") {
      const val2 = object2[key];
      if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2, _internal_visited) : !Object.is(val1, val2)) {
        return false;
      }
    }
  }
  return true;
}
const HookFormContext = React.createContext(null);
HookFormContext.displayName = "HookFormContext";
var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria ? {
  ...errors[name],
  types: {
    ...errors[name] && errors[name].types ? errors[name].types : {},
    [type]: message || true
  }
} : {};
var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];
var createSubject = () => {
  let _observers = [];
  const next = (value) => {
    for (const observer of _observers) {
      observer.next && observer.next(value);
    }
  };
  const subscribe = (observer) => {
    _observers.push(observer);
    return {
      unsubscribe: () => {
        _observers = _observers.filter((o) => o !== observer);
      }
    };
  };
  const unsubscribe = () => {
    _observers = [];
  };
  return {
    get observers() {
      return _observers;
    },
    next,
    subscribe,
    unsubscribe
  };
};
function extractFormValues(fieldsState, formValues) {
  const values = {};
  for (const key in fieldsState) {
    if (fieldsState.hasOwnProperty(key)) {
      const fieldState = fieldsState[key];
      const fieldValue = formValues[key];
      if (fieldState && isObject(fieldState) && fieldValue) {
        const nestedFieldsState = extractFormValues(fieldState, fieldValue);
        if (isObject(nestedFieldsState)) {
          values[key] = nestedFieldsState;
        }
      } else if (fieldsState[key]) {
        values[key] = fieldValue;
      }
    }
  }
  return values;
}
var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;
var isFileInput = (element) => element.type === "file";
var isHTMLElement = (value) => {
  if (!isWeb) {
    return false;
  }
  const owner = value ? value.ownerDocument : 0;
  return value instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
};
var isMultipleSelect = (element) => element.type === `select-multiple`;
var isRadioInput = (element) => element.type === "radio";
var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);
var live = (ref) => isHTMLElement(ref) && ref.isConnected;
function baseGet(object, updatePath) {
  const length = updatePath.slice(0, -1).length;
  let index = 0;
  while (index < length) {
    object = isUndefined(object) ? index++ : object[updatePath[index++]];
  }
  return object;
}
function isEmptyArray(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
      return false;
    }
  }
  return true;
}
function unset(object, path) {
  const paths = Array.isArray(path) ? path : isKey(path) ? [path] : stringToPath(path);
  const childObject = paths.length === 1 ? object : baseGet(object, paths);
  const index = paths.length - 1;
  const key = paths[index];
  if (childObject) {
    delete childObject[key];
  }
  if (index !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
    unset(object, paths.slice(0, -1));
  }
  return object;
}
var objectHasFunction = (data) => {
  for (const key in data) {
    if (isFunction(data[key])) {
      return true;
    }
  }
  return false;
};
function isTraversable(value) {
  return Array.isArray(value) || isObject(value) && !objectHasFunction(value);
}
function markFieldsDirty(data, fields = {}) {
  for (const key in data) {
    const value = data[key];
    if (isTraversable(value)) {
      fields[key] = Array.isArray(value) ? [] : {};
      markFieldsDirty(value, fields[key]);
    } else if (!isUndefined(value)) {
      fields[key] = true;
    }
  }
  return fields;
}
function getDirtyFields(data, formValues, dirtyFieldsFromValues) {
  if (!dirtyFieldsFromValues) {
    dirtyFieldsFromValues = markFieldsDirty(formValues);
  }
  for (const key in data) {
    const value = data[key];
    if (isTraversable(value)) {
      if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
        dirtyFieldsFromValues[key] = markFieldsDirty(value, Array.isArray(value) ? [] : {});
      } else {
        getDirtyFields(value, isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
      }
    } else {
      const formValue = formValues[key];
      dirtyFieldsFromValues[key] = !deepEqual(value, formValue);
    }
  }
  return dirtyFieldsFromValues;
}
const defaultResult = {
  value: false,
  isValid: false
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
  if (Array.isArray(options)) {
    if (options.length > 1) {
      const values = options.filter((option) => option && option.checked && !option.disabled).map((option) => option.value);
      return { value: values, isValid: !!values.length };
    }
    return options[0].checked && !options[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === "" ? validResult : { value: options[0].value, isValid: true } : validResult
    ) : defaultResult;
  }
  return defaultResult;
};
var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value) ? value : valueAsNumber ? value === "" ? NaN : value ? +value : value : valueAsDate && isString(value) ? new Date(value) : setValueAs ? setValueAs(value) : value;
const defaultReturn = {
  isValid: false,
  value: null
};
var getRadioValue = (options) => Array.isArray(options) ? options.reduce((previous, option) => option && option.checked && !option.disabled ? {
  isValid: true,
  value: option.value
} : previous, defaultReturn) : defaultReturn;
function getFieldValue(_f) {
  const ref = _f.ref;
  if (isFileInput(ref)) {
    return ref.files;
  }
  if (isRadioInput(ref)) {
    return getRadioValue(_f.refs).value;
  }
  if (isMultipleSelect(ref)) {
    return [...ref.selectedOptions].map(({ value }) => value);
  }
  if (isCheckBoxInput(ref)) {
    return getCheckboxValue(_f.refs).value;
  }
  return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
  const fields = {};
  for (const name of fieldsNames) {
    const field = get(_fields, name);
    field && set(fields, name, field._f);
  }
  return {
    criteriaMode,
    names: [...fieldsNames],
    fields,
    shouldUseNativeValidation
  };
};
var isRegex = (value) => value instanceof RegExp;
var getRuleValue = (rule) => isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var getValidationModes = (mode) => ({
  isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
  isOnBlur: mode === VALIDATION_MODE.onBlur,
  isOnChange: mode === VALIDATION_MODE.onChange,
  isOnAll: mode === VALIDATION_MODE.all,
  isOnTouch: mode === VALIDATION_MODE.onTouched
});
const ASYNC_FUNCTION = "AsyncFunction";
var hasPromiseValidation = (fieldReference) => !!fieldReference && !!fieldReference.validate && !!(isFunction(fieldReference.validate) && fieldReference.validate.constructor.name === ASYNC_FUNCTION || isObject(fieldReference.validate) && Object.values(fieldReference.validate).find((validateFunction) => validateFunction.constructor.name === ASYNC_FUNCTION));
var hasValidation = (options) => options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
var isWatched = (name, _names, isBlurEvent) => !isBlurEvent && (_names.watchAll || _names.watch.has(name) || [..._names.watch].some((watchName) => name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
const iterateFieldsByAction = (fields, action, fieldsNames, abortEarly) => {
  for (const key of fieldsNames || Object.keys(fields)) {
    const field = get(fields, key);
    if (field) {
      const { _f, ...currentField } = field;
      if (_f) {
        if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) {
          return true;
        } else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) {
          return true;
        } else {
          if (iterateFieldsByAction(currentField, action)) {
            break;
          }
        }
      } else if (isObject(currentField)) {
        if (iterateFieldsByAction(currentField, action)) {
          break;
        }
      }
    }
  }
  return;
};
function schemaErrorLookup(errors, _fields, name) {
  const error = get(errors, name);
  if (error || isKey(name)) {
    return {
      error,
      name
    };
  }
  const names = name.split(".");
  while (names.length) {
    const fieldName = names.join(".");
    const field = get(_fields, fieldName);
    const foundError = get(errors, fieldName);
    if (field && !Array.isArray(field) && name !== fieldName) {
      return { name };
    }
    if (foundError && foundError.type) {
      return {
        name: fieldName,
        error: foundError
      };
    }
    if (foundError && foundError.root && foundError.root.type) {
      return {
        name: `${fieldName}.root`,
        error: foundError.root
      };
    }
    names.pop();
  }
  return {
    name
  };
}
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
  updateFormState(formStateData);
  const { name, ...formState } = formStateData;
  return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key) => _proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var shouldSubscribeByName = (name, signalName, exact) => !name || !signalName || name === signalName || convertToArrayPayload(name).some((currentName) => currentName && (exact ? currentName === signalName : currentName.startsWith(signalName) || signalName.startsWith(currentName)));
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
  if (mode.isOnAll) {
    return false;
  } else if (!isSubmitted && mode.isOnTouch) {
    return !(isTouched || isBlurEvent);
  } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
    return !isBlurEvent;
  } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
    return isBlurEvent;
  }
  return true;
};
var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);
var updateFieldArrayRootError = (errors, error, name) => {
  const fieldArrayErrors = convertToArrayPayload(get(errors, name));
  set(fieldArrayErrors, ROOT_ERROR_TYPE, error[name]);
  set(errors, name, fieldArrayErrors);
  return errors;
};
function getValidateError(result, ref, type = "validate") {
  if (isString(result) || Array.isArray(result) && result.every(isString) || isBoolean(result) && !result) {
    return {
      type,
      message: isString(result) ? result : "",
      ref
    };
  }
}
var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData) ? validationData : {
  value: validationData,
  message: ""
};
var validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
  const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount } = field._f;
  const inputValue = get(formValues, name);
  if (!mount || disabledFieldNames.has(name)) {
    return {};
  }
  const inputRef = refs ? refs[0] : ref;
  const setCustomValidity = (message) => {
    if (shouldUseNativeValidation && inputRef.reportValidity) {
      inputRef.setCustomValidity(isBoolean(message) ? "" : message || "");
      inputRef.reportValidity();
    }
  };
  const error = {};
  const isRadio = isRadioInput(ref);
  const isCheckBox = isCheckBoxInput(ref);
  const isRadioOrCheckbox2 = isRadio || isCheckBox;
  const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === "" || inputValue === "" || Array.isArray(inputValue) && !inputValue.length;
  const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
  const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
    const message = exceedMax ? maxLengthMessage : minLengthMessage;
    error[name] = {
      type: exceedMax ? maxType : minType,
      message,
      ref,
      ...appendErrorsCurry(exceedMax ? maxType : minType, message)
    };
  };
  if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox2 && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
    const { value, message } = isString(required) ? { value: !!required, message: required } : getValueAndMessage(required);
    if (value) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.required,
        message,
        ref: inputRef,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
    let exceedMax;
    let exceedMin;
    const maxOutput = getValueAndMessage(max);
    const minOutput = getValueAndMessage(min);
    if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
      const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
      if (!isNullOrUndefined(maxOutput.value)) {
        exceedMax = valueNumber > maxOutput.value;
      }
      if (!isNullOrUndefined(minOutput.value)) {
        exceedMin = valueNumber < minOutput.value;
      }
    } else {
      const valueDate = ref.valueAsDate || new Date(inputValue);
      const convertTimeToDate = (time) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + time);
      const isTime = ref.type == "time";
      const isWeek = ref.type == "week";
      if (isString(maxOutput.value) && inputValue) {
        exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
      }
      if (isString(minOutput.value) && inputValue) {
        exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
      }
    }
    if (exceedMax || exceedMin) {
      getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
    const maxLengthOutput = getValueAndMessage(maxLength);
    const minLengthOutput = getValueAndMessage(minLength);
    const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
    const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
    if (exceedMax || exceedMin) {
      getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if (pattern && !isEmpty && isString(inputValue)) {
    const { value: patternValue, message } = getValueAndMessage(pattern);
    if (isRegex(patternValue) && !inputValue.match(patternValue)) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.pattern,
        message,
        ref,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (validate) {
    if (isFunction(validate)) {
      const result = await validate(inputValue, formValues);
      const validateError = getValidateError(result, inputRef);
      if (validateError) {
        error[name] = {
          ...validateError,
          ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
        };
        if (!validateAllFieldCriteria) {
          setCustomValidity(validateError.message);
          return error;
        }
      }
    } else if (isObject(validate)) {
      let validationResult = {};
      for (const key in validate) {
        if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
          break;
        }
        const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
        if (validateError) {
          validationResult = {
            ...validateError,
            ...appendErrorsCurry(key, validateError.message)
          };
          setCustomValidity(validateError.message);
          if (validateAllFieldCriteria) {
            error[name] = validationResult;
          }
        }
      }
      if (!isEmptyObject(validationResult)) {
        error[name] = {
          ref: inputRef,
          ...validationResult
        };
        if (!validateAllFieldCriteria) {
          return error;
        }
      }
    }
  }
  setCustomValidity(true);
  return error;
};
const defaultOptions = {
  mode: VALIDATION_MODE.onSubmit,
  reValidateMode: VALIDATION_MODE.onChange,
  shouldFocusError: true
};
function createFormControl(props = {}) {
  let _options = {
    ...defaultOptions,
    ...props
  };
  let _formState = {
    submitCount: 0,
    isDirty: false,
    isReady: false,
    isLoading: isFunction(_options.defaultValues),
    isValidating: false,
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: _options.errors || {},
    disabled: _options.disabled || false
  };
  let _fields = {};
  let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
  let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
  let _state = {
    action: false,
    mount: false,
    watch: false,
    keepIsValid: false
  };
  let _names = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  };
  let delayErrorCallback;
  let timer = 0;
  const defaultProxyFormState = {
    isDirty: false,
    dirtyFields: false,
    validatingFields: false,
    touchedFields: false,
    isValidating: false,
    isValid: false,
    errors: false
  };
  const _proxyFormState = {
    ...defaultProxyFormState
  };
  let _proxySubscribeFormState = {
    ..._proxyFormState
  };
  const _subjects = {
    array: createSubject(),
    state: createSubject()
  };
  const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
  const debounce = (callback) => (wait) => {
    clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
  const _setValid = async (shouldUpdateValid) => {
    if (_state.keepIsValid) {
      return;
    }
    if (!_options.disabled && (_proxyFormState.isValid || _proxySubscribeFormState.isValid || shouldUpdateValid)) {
      let isValid;
      if (_options.resolver) {
        isValid = isEmptyObject((await _runSchema()).errors);
        _updateIsValidating();
      } else {
        isValid = await executeBuiltInValidation({
          fields: _fields,
          onlyCheckValid: true,
          eventType: EVENTS.VALID
        });
      }
      if (isValid !== _formState.isValid) {
        _subjects.state.next({
          isValid
        });
      }
    }
  };
  const _updateIsValidating = (names, isValidating) => {
    if (!_options.disabled && (_proxyFormState.isValidating || _proxyFormState.validatingFields || _proxySubscribeFormState.isValidating || _proxySubscribeFormState.validatingFields)) {
      (names || Array.from(_names.mount)).forEach((name) => {
        if (name) {
          isValidating ? set(_formState.validatingFields, name, isValidating) : unset(_formState.validatingFields, name);
        }
      });
      _subjects.state.next({
        validatingFields: _formState.validatingFields,
        isValidating: !isEmptyObject(_formState.validatingFields)
      });
    }
  };
  const _setFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
    if (args && method && !_options.disabled) {
      _state.action = true;
      if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
        const fieldValues = method(get(_fields, name), args.argA, args.argB);
        shouldSetValues && set(_fields, name, fieldValues);
      }
      if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
        const errors = method(get(_formState.errors, name), args.argA, args.argB);
        shouldSetValues && set(_formState.errors, name, errors);
        unsetEmptyArray(_formState.errors, name);
      }
      if ((_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
        const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
        shouldSetValues && set(_formState.touchedFields, name, touchedFields);
      }
      if (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) {
        const fullDirtyFields = getDirtyFields(_defaultValues, _formValues);
        const rootName = getNodeParentName(name);
        set(_formState.dirtyFields, rootName, get(fullDirtyFields, rootName));
      }
      _subjects.state.next({
        name,
        isDirty: _getDirty(name, values),
        dirtyFields: _formState.dirtyFields,
        errors: _formState.errors,
        isValid: _formState.isValid
      });
    } else {
      set(_formValues, name, values);
    }
  };
  const updateErrors = (name, error) => {
    set(_formState.errors, name, error);
    _subjects.state.next({
      errors: _formState.errors
    });
  };
  const _setErrors = (errors) => {
    _formState.errors = errors;
    _subjects.state.next({
      errors: _formState.errors,
      isValid: false
    });
  };
  const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
    const field = get(_fields, name);
    if (field) {
      const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
      isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
      _state.mount && !_state.action && _setValid();
    }
  };
  const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
    let shouldUpdateField = false;
    let isPreviousDirty = false;
    const output = {
      name
    };
    if (!_options.disabled) {
      if (!isBlurEvent || shouldDirty) {
        if (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty) {
          isPreviousDirty = _formState.isDirty;
          _formState.isDirty = output.isDirty = _getDirty();
          shouldUpdateField = isPreviousDirty !== output.isDirty;
        }
        const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
        isPreviousDirty = !!get(_formState.dirtyFields, name);
        isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
        output.dirtyFields = _formState.dirtyFields;
        shouldUpdateField = shouldUpdateField || (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) && isPreviousDirty !== !isCurrentFieldPristine;
      }
      if (isBlurEvent) {
        const isPreviousFieldTouched = get(_formState.touchedFields, name);
        if (!isPreviousFieldTouched) {
          set(_formState.touchedFields, name, isBlurEvent);
          output.touchedFields = _formState.touchedFields;
          shouldUpdateField = shouldUpdateField || (_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && isPreviousFieldTouched !== isBlurEvent;
        }
      }
      shouldUpdateField && shouldRender && _subjects.state.next(output);
    }
    return shouldUpdateField ? output : {};
  };
  const shouldRenderByError = (name, isValid, error, fieldState) => {
    const previousFieldError = get(_formState.errors, name);
    const shouldUpdateValid = (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isBoolean(isValid) && _formState.isValid !== isValid;
    if (_options.delayError && error) {
      delayErrorCallback = debounce(() => updateErrors(name, error));
      delayErrorCallback(_options.delayError);
    } else {
      clearTimeout(timer);
      delayErrorCallback = null;
      error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
    }
    if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
      const updatedFormState = {
        ...fieldState,
        ...shouldUpdateValid && isBoolean(isValid) ? { isValid } : {},
        errors: _formState.errors,
        name
      };
      _formState = {
        ..._formState,
        ...updatedFormState
      };
      _subjects.state.next(updatedFormState);
    }
  };
  const _runSchema = async (name) => {
    _updateIsValidating(name, true);
    return await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
  };
  const executeSchemaAndUpdateState = async (names) => {
    const { errors } = await _runSchema(names);
    _updateIsValidating(names);
    if (names) {
      for (const name of names) {
        const error = get(errors, name);
        error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
      }
    } else {
      _formState.errors = errors;
    }
    return errors;
  };
  const validateForm = async ({ name, eventType }) => {
    if (props.validate) {
      const result = await props.validate({
        formValues: _formValues,
        formState: _formState,
        name,
        eventType
      });
      if (isObject(result)) {
        for (const key in result) {
          const error = result[key];
          if (error) {
            setError(`${FORM_ERROR_TYPE}.${key}`, {
              message: isString(result.message) ? result.message : "",
              type: INPUT_VALIDATION_RULES.validate
            });
          }
        }
      } else if (isString(result) || !result) {
        setError(FORM_ERROR_TYPE, {
          message: result || "",
          type: INPUT_VALIDATION_RULES.validate
        });
      } else {
        clearErrors(FORM_ERROR_TYPE);
      }
      return result;
    }
    return true;
  };
  const executeBuiltInValidation = async ({ fields, onlyCheckValid, name, eventType, context = {
    valid: true,
    runRootValidation: false
  } }) => {
    if (props.validate) {
      context.runRootValidation = true;
      const result = await validateForm({
        name,
        eventType
      });
      if (!result) {
        context.valid = false;
        if (onlyCheckValid) {
          return context.valid;
        }
      }
    }
    for (const name2 in fields) {
      const field = fields[name2];
      if (field) {
        const { _f, ...fieldValue } = field;
        if (_f) {
          const isFieldArrayRoot = _names.array.has(_f.name);
          const isPromiseFunction = field._f && hasPromiseValidation(field._f);
          if (isPromiseFunction && _proxyFormState.validatingFields) {
            _updateIsValidating([_f.name], true);
          }
          const fieldError = await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !onlyCheckValid, isFieldArrayRoot);
          if (isPromiseFunction && _proxyFormState.validatingFields) {
            _updateIsValidating([_f.name]);
          }
          if (fieldError[_f.name]) {
            context.valid = false;
            if (onlyCheckValid) {
              break;
            }
          }
          !onlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
          if (props.shouldUseNativeValidation && fieldError[_f.name]) {
            break;
          }
        }
        !isEmptyObject(fieldValue) && await executeBuiltInValidation({
          context,
          onlyCheckValid,
          fields: fieldValue,
          name: name2,
          eventType
        });
      }
    }
    return context.valid;
  };
  const _removeUnmounted = () => {
    for (const name of _names.unMount) {
      const field = get(_fields, name);
      field && (field._f.refs ? field._f.refs.every((ref) => !live(ref)) : !live(field._f.ref)) && unregister(name);
    }
    _names.unMount = /* @__PURE__ */ new Set();
  };
  const _getDirty = (name, data) => !_options.disabled && (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
  const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, {
    ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? { [names]: defaultValue } : defaultValue
  }, isGlobal, defaultValue);
  const _getFieldArray = (name) => compact(get(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? get(_defaultValues, name, []) : []));
  const setFieldValue = (name, value, options = {}) => {
    const field = get(_fields, name);
    let fieldValue = value;
    if (field) {
      const fieldReference = field._f;
      if (fieldReference) {
        !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value, fieldReference));
        fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value) ? "" : value;
        if (isMultipleSelect(fieldReference.ref)) {
          [...fieldReference.ref.options].forEach((optionRef) => optionRef.selected = fieldValue.includes(optionRef.value));
        } else if (fieldReference.refs) {
          if (isCheckBoxInput(fieldReference.ref)) {
            fieldReference.refs.forEach((checkboxRef) => {
              if (!checkboxRef.defaultChecked || !checkboxRef.disabled) {
                if (Array.isArray(fieldValue)) {
                  checkboxRef.checked = !!fieldValue.find((data) => data === checkboxRef.value);
                } else {
                  checkboxRef.checked = fieldValue === checkboxRef.value || !!fieldValue;
                }
              }
            });
          } else {
            fieldReference.refs.forEach((radioRef) => radioRef.checked = radioRef.value === fieldValue);
          }
        } else if (isFileInput(fieldReference.ref)) {
          fieldReference.ref.value = "";
        } else {
          fieldReference.ref.value = fieldValue;
          if (!fieldReference.ref.type) {
            _subjects.state.next({
              name,
              values: cloneObject(_formValues)
            });
          }
        }
      }
    }
    (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
    options.shouldValidate && trigger(name);
  };
  const setValues = (name, value, options) => {
    for (const fieldKey in value) {
      if (!value.hasOwnProperty(fieldKey)) {
        return;
      }
      const fieldValue = value[fieldKey];
      const fieldName = name + "." + fieldKey;
      const field = get(_fields, fieldName);
      (_names.array.has(name) || isObject(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
    }
  };
  const setValue = (name, value, options = {}) => {
    const field = get(_fields, name);
    const isFieldArray = _names.array.has(name);
    const cloneValue = cloneObject(value);
    set(_formValues, name, cloneValue);
    if (isFieldArray) {
      _subjects.array.next({
        name,
        values: cloneObject(_formValues)
      });
      if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields || _proxySubscribeFormState.isDirty || _proxySubscribeFormState.dirtyFields) && options.shouldDirty) {
        _subjects.state.next({
          name,
          dirtyFields: getDirtyFields(_defaultValues, _formValues),
          isDirty: _getDirty(name, cloneValue)
        });
      }
    } else {
      field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
    }
    if (isWatched(name, _names)) {
      _subjects.state.next({
        ..._formState,
        name,
        values: cloneObject(_formValues)
      });
    } else {
      _subjects.state.next({
        name: _state.mount ? name : void 0,
        values: cloneObject(_formValues)
      });
    }
  };
  const onChange = async (event) => {
    _state.mount = true;
    const target = event.target;
    let name = target.name;
    let isFieldValueUpdated = true;
    const field = get(_fields, name);
    const _updateIsFieldValueUpdated = (fieldValue) => {
      isFieldValueUpdated = Number.isNaN(fieldValue) || isDateObject(fieldValue) && isNaN(fieldValue.getTime()) || deepEqual(fieldValue, get(_formValues, name, fieldValue));
    };
    const validationModeBeforeSubmit = getValidationModes(_options.mode);
    const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
    if (field) {
      let error;
      let isValid;
      const fieldValue = target.type ? getFieldValue(field._f) : getEventValue(event);
      const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
      const shouldSkipValidation = !hasValidation(field._f) && !props.validate && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
      const watched = isWatched(name, _names, isBlurEvent);
      set(_formValues, name, fieldValue);
      if (isBlurEvent) {
        if (!target || !target.readOnly) {
          field._f.onBlur && field._f.onBlur(event);
          delayErrorCallback && delayErrorCallback(0);
        }
      } else if (field._f.onChange) {
        field._f.onChange(event);
      }
      const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent);
      const shouldRender = !isEmptyObject(fieldState) || watched;
      !isBlurEvent && _subjects.state.next({
        name,
        type: event.type,
        values: cloneObject(_formValues)
      });
      if (shouldSkipValidation) {
        if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
          if (_options.mode === "onBlur") {
            if (isBlurEvent) {
              _setValid();
            }
          } else if (!isBlurEvent) {
            _setValid();
          }
        }
        return shouldRender && _subjects.state.next({ name, ...watched ? {} : fieldState });
      }
      if (!_options.resolver && props.validate) {
        await validateForm({
          name,
          eventType: event.type
        });
      }
      !isBlurEvent && watched && _subjects.state.next({ ..._formState });
      if (_options.resolver) {
        const { errors } = await _runSchema([name]);
        _updateIsValidating([name]);
        _updateIsFieldValueUpdated(fieldValue);
        if (isFieldValueUpdated) {
          const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
          const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
          error = errorLookupResult.error;
          name = errorLookupResult.name;
          isValid = isEmptyObject(errors);
        }
      } else {
        _updateIsValidating([name], true);
        error = (await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
        _updateIsValidating([name]);
        _updateIsFieldValueUpdated(fieldValue);
        if (isFieldValueUpdated) {
          if (error) {
            isValid = false;
          } else if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
            isValid = await executeBuiltInValidation({
              fields: _fields,
              onlyCheckValid: true,
              name,
              eventType: event.type
            });
          }
        }
      }
      if (isFieldValueUpdated) {
        field._f.deps && (!Array.isArray(field._f.deps) || field._f.deps.length > 0) && trigger(field._f.deps);
        shouldRenderByError(name, isValid, error, fieldState);
      }
    }
  };
  const _focusInput = (ref, key) => {
    if (get(_formState.errors, key) && ref.focus) {
      ref.focus();
      return 1;
    }
    return;
  };
  const trigger = async (name, options = {}) => {
    let isValid;
    let validationResult;
    const fieldNames = convertToArrayPayload(name);
    if (_options.resolver) {
      const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
      isValid = isEmptyObject(errors);
      validationResult = name ? !fieldNames.some((name2) => get(errors, name2)) : isValid;
    } else if (name) {
      validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
        const field = get(_fields, fieldName);
        return await executeBuiltInValidation({
          fields: field && field._f ? { [fieldName]: field } : field,
          eventType: EVENTS.TRIGGER
        });
      }))).every(Boolean);
      !(!validationResult && !_formState.isValid) && _setValid();
    } else {
      validationResult = isValid = await executeBuiltInValidation({
        fields: _fields,
        name,
        eventType: EVENTS.TRIGGER
      });
    }
    _subjects.state.next({
      ...!isString(name) || (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isValid !== _formState.isValid ? {} : { name },
      ..._options.resolver || !name ? { isValid } : {},
      errors: _formState.errors
    });
    options.shouldFocus && !validationResult && iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
    return validationResult;
  };
  const getValues = (fieldNames, config) => {
    let values = {
      ..._state.mount ? _formValues : _defaultValues
    };
    if (config) {
      values = extractFormValues(config.dirtyFields ? _formState.dirtyFields : _formState.touchedFields, values);
    }
    return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name) => get(values, name));
  };
  const getFieldState = (name, formState) => ({
    invalid: !!get((formState || _formState).errors, name),
    isDirty: !!get((formState || _formState).dirtyFields, name),
    error: get((formState || _formState).errors, name),
    isValidating: !!get(_formState.validatingFields, name),
    isTouched: !!get((formState || _formState).touchedFields, name)
  });
  const clearErrors = (name) => {
    const names = name ? convertToArrayPayload(name) : void 0;
    names === null || names === void 0 ? void 0 : names.forEach((inputName) => unset(_formState.errors, inputName));
    if (names) {
      names.forEach((inputName) => {
        _subjects.state.next({
          name: inputName,
          errors: _formState.errors
        });
      });
    } else {
      _subjects.state.next({
        errors: {}
      });
    }
  };
  const setError = (name, error, options) => {
    const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
    const currentError = get(_formState.errors, name) || {};
    const { ref: currentRef, message, type, ...restOfErrorTree } = currentError;
    set(_formState.errors, name, {
      ...restOfErrorTree,
      ...error,
      ref
    });
    _subjects.state.next({
      name,
      errors: _formState.errors,
      isValid: false
    });
    options && options.shouldFocus && ref && ref.focus && ref.focus();
  };
  const watch = (name, defaultValue) => isFunction(name) ? _subjects.state.subscribe({
    next: (payload) => "values" in payload && name(_getWatch(void 0, defaultValue), payload)
  }) : _getWatch(name, defaultValue, true);
  const _subscribe = (props2) => _subjects.state.subscribe({
    next: (formState) => {
      if (shouldSubscribeByName(props2.name, formState.name, props2.exact) && shouldRenderFormState(formState, props2.formState || _proxyFormState, _setFormState, props2.reRenderRoot)) {
        props2.callback({
          values: { ..._formValues },
          ..._formState,
          ...formState,
          defaultValues: _defaultValues
        });
      }
    }
  }).unsubscribe;
  const subscribe = (props2) => {
    _state.mount = true;
    _proxySubscribeFormState = {
      ..._proxySubscribeFormState,
      ...props2.formState
    };
    return _subscribe({
      ...props2,
      formState: {
        ...defaultProxyFormState,
        ...props2.formState
      }
    });
  };
  const unregister = (name, options = {}) => {
    for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
      _names.mount.delete(fieldName);
      _names.array.delete(fieldName);
      if (!options.keepValue) {
        unset(_fields, fieldName);
        unset(_formValues, fieldName);
      }
      !options.keepError && unset(_formState.errors, fieldName);
      !options.keepDirty && unset(_formState.dirtyFields, fieldName);
      !options.keepTouched && unset(_formState.touchedFields, fieldName);
      !options.keepIsValidating && unset(_formState.validatingFields, fieldName);
      !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
    }
    _subjects.state.next({
      values: cloneObject(_formValues)
    });
    _subjects.state.next({
      ..._formState,
      ...!options.keepDirty ? {} : { isDirty: _getDirty() }
    });
    !options.keepIsValid && _setValid();
  };
  const _setDisabledField = ({ disabled, name }) => {
    if (isBoolean(disabled) && _state.mount || !!disabled || _names.disabled.has(name)) {
      const wasDisabled = _names.disabled.has(name);
      const isDisabled = !!disabled;
      const disabledStateChanged = wasDisabled !== isDisabled;
      disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
      disabledStateChanged && _state.mount && !_state.action && _setValid();
    }
  };
  const register = (name, options = {}) => {
    let field = get(_fields, name);
    const disabledIsDefined = isBoolean(options.disabled) || isBoolean(_options.disabled);
    set(_fields, name, {
      ...field || {},
      _f: {
        ...field && field._f ? field._f : { ref: { name } },
        name,
        mount: true,
        ...options
      }
    });
    _names.mount.add(name);
    if (field) {
      _setDisabledField({
        disabled: isBoolean(options.disabled) ? options.disabled : _options.disabled,
        name
      });
    } else {
      updateValidAndValue(name, true, options.value);
    }
    return {
      ...disabledIsDefined ? { disabled: options.disabled || _options.disabled } : {},
      ..._options.progressive ? {
        required: !!options.required,
        min: getRuleValue(options.min),
        max: getRuleValue(options.max),
        minLength: getRuleValue(options.minLength),
        maxLength: getRuleValue(options.maxLength),
        pattern: getRuleValue(options.pattern)
      } : {},
      name,
      onChange,
      onBlur: onChange,
      ref: (ref) => {
        if (ref) {
          register(name, options);
          field = get(_fields, name);
          const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll("input,select,textarea")[0] || ref : ref : ref;
          const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
          const refs = field._f.refs || [];
          if (radioOrCheckbox ? refs.find((option) => option === fieldRef) : fieldRef === field._f.ref) {
            return;
          }
          set(_fields, name, {
            _f: {
              ...field._f,
              ...radioOrCheckbox ? {
                refs: [
                  ...refs.filter(live),
                  fieldRef,
                  ...Array.isArray(get(_defaultValues, name)) ? [{}] : []
                ],
                ref: { type: fieldRef.type, name }
              } : { ref: fieldRef }
            }
          });
          updateValidAndValue(name, false, void 0, fieldRef);
        } else {
          field = get(_fields, name, {});
          if (field._f) {
            field._f.mount = false;
          }
          (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
        }
      }
    };
  };
  const _focusError = () => _options.shouldFocusError && iterateFieldsByAction(_fields, _focusInput, _names.mount);
  const _disableForm = (disabled) => {
    if (isBoolean(disabled)) {
      _subjects.state.next({ disabled });
      iterateFieldsByAction(_fields, (ref, name) => {
        const currentField = get(_fields, name);
        if (currentField) {
          ref.disabled = currentField._f.disabled || disabled;
          if (Array.isArray(currentField._f.refs)) {
            currentField._f.refs.forEach((inputRef) => {
              inputRef.disabled = currentField._f.disabled || disabled;
            });
          }
        }
      }, 0, false);
    }
  };
  const handleSubmit = (onValid, onInvalid) => async (e) => {
    let onValidError = void 0;
    if (e) {
      e.preventDefault && e.preventDefault();
      e.persist && e.persist();
    }
    let fieldValues = cloneObject(_formValues);
    _subjects.state.next({
      isSubmitting: true
    });
    if (_options.resolver) {
      const { errors, values } = await _runSchema();
      _updateIsValidating();
      _formState.errors = errors;
      fieldValues = cloneObject(values);
    } else {
      await executeBuiltInValidation({
        fields: _fields,
        eventType: EVENTS.SUBMIT
      });
    }
    if (_names.disabled.size) {
      for (const name of _names.disabled) {
        unset(fieldValues, name);
      }
    }
    unset(_formState.errors, ROOT_ERROR_TYPE);
    if (isEmptyObject(_formState.errors)) {
      _subjects.state.next({
        errors: {}
      });
      try {
        await onValid(fieldValues, e);
      } catch (error) {
        onValidError = error;
      }
    } else {
      if (onInvalid) {
        await onInvalid({ ..._formState.errors }, e);
      }
      _focusError();
      setTimeout(_focusError);
    }
    _subjects.state.next({
      isSubmitted: true,
      isSubmitting: false,
      isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
      submitCount: _formState.submitCount + 1,
      errors: _formState.errors
    });
    if (onValidError) {
      throw onValidError;
    }
  };
  const resetField = (name, options = {}) => {
    if (get(_fields, name)) {
      if (isUndefined(options.defaultValue)) {
        setValue(name, cloneObject(get(_defaultValues, name)));
      } else {
        setValue(name, options.defaultValue);
        set(_defaultValues, name, cloneObject(options.defaultValue));
      }
      if (!options.keepTouched) {
        unset(_formState.touchedFields, name);
      }
      if (!options.keepDirty) {
        unset(_formState.dirtyFields, name);
        _formState.isDirty = options.defaultValue ? _getDirty(name, cloneObject(get(_defaultValues, name))) : _getDirty();
      }
      if (!options.keepError) {
        unset(_formState.errors, name);
        _proxyFormState.isValid && _setValid();
      }
      _subjects.state.next({ ..._formState });
    }
  };
  const _reset = (formValues, keepStateOptions = {}) => {
    const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
    const cloneUpdatedValues = cloneObject(updatedValues);
    const isEmptyResetValues = isEmptyObject(formValues);
    const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
    if (!keepStateOptions.keepDefaultValues) {
      _defaultValues = updatedValues;
    }
    if (!keepStateOptions.keepValues) {
      if (keepStateOptions.keepDirtyValues) {
        const fieldsToCheck = /* @__PURE__ */ new Set([
          ..._names.mount,
          ...Object.keys(getDirtyFields(_defaultValues, _formValues))
        ]);
        for (const fieldName of Array.from(fieldsToCheck)) {
          const isDirty = get(_formState.dirtyFields, fieldName);
          const existingValue = get(_formValues, fieldName);
          const newValue = get(values, fieldName);
          if (isDirty && !isUndefined(existingValue)) {
            set(values, fieldName, existingValue);
          } else if (!isDirty && !isUndefined(newValue)) {
            setValue(fieldName, newValue);
          }
        }
      } else {
        if (isWeb && isUndefined(formValues)) {
          for (const name of _names.mount) {
            const field = get(_fields, name);
            if (field && field._f) {
              const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
              if (isHTMLElement(fieldReference)) {
                const form = fieldReference.closest("form");
                if (form) {
                  form.reset();
                  break;
                }
              }
            }
          }
        }
        if (keepStateOptions.keepFieldsRef) {
          for (const fieldName of _names.mount) {
            setValue(fieldName, get(values, fieldName));
          }
        } else {
          _fields = {};
        }
      }
      _formValues = _options.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneObject(values);
      _subjects.array.next({
        values: { ...values }
      });
      _subjects.state.next({
        values: { ...values }
      });
    }
    _names = {
      mount: keepStateOptions.keepDirtyValues ? _names.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: false,
      focus: ""
    };
    _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid || !!keepStateOptions.keepDirtyValues || !_options.shouldUnregister && !isEmptyObject(values);
    _state.watch = !!_options.shouldUnregister;
    _state.keepIsValid = !!keepStateOptions.keepIsValid;
    _state.action = false;
    if (!keepStateOptions.keepErrors) {
      _formState.errors = {};
    }
    _subjects.state.next({
      submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
      isDirty: isEmptyResetValues ? false : keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
      isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
      dirtyFields: isEmptyResetValues ? {} : keepStateOptions.keepDirtyValues ? keepStateOptions.keepDefaultValues && _formValues ? getDirtyFields(_defaultValues, _formValues) : _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : keepStateOptions.keepDirty ? _formState.dirtyFields : {},
      touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
      errors: keepStateOptions.keepErrors ? _formState.errors : {},
      isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
      isSubmitting: false,
      defaultValues: _defaultValues
    });
  };
  const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues) ? formValues(_formValues) : formValues, { ..._options.resetOptions, ...keepStateOptions });
  const setFocus = (name, options = {}) => {
    const field = get(_fields, name);
    const fieldReference = field && field._f;
    if (fieldReference) {
      const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
      if (fieldRef.focus) {
        setTimeout(() => {
          fieldRef.focus();
          options.shouldSelect && isFunction(fieldRef.select) && fieldRef.select();
        });
      }
    }
  };
  const _setFormState = (updatedFormState) => {
    _formState = {
      ..._formState,
      ...updatedFormState
    };
  };
  const _resetDefaultValues = () => isFunction(_options.defaultValues) && _options.defaultValues().then((values) => {
    reset(values, _options.resetOptions);
    _subjects.state.next({
      isLoading: false
    });
  });
  const methods = {
    control: {
      register,
      unregister,
      getFieldState,
      handleSubmit,
      setError,
      _subscribe,
      _runSchema,
      _updateIsValidating,
      _focusError,
      _getWatch,
      _getDirty,
      _setValid,
      _setFieldArray,
      _setDisabledField,
      _setErrors,
      _getFieldArray,
      _reset,
      _resetDefaultValues,
      _removeUnmounted,
      _disableForm,
      _subjects,
      _proxyFormState,
      get _fields() {
        return _fields;
      },
      get _formValues() {
        return _formValues;
      },
      get _state() {
        return _state;
      },
      set _state(value) {
        _state = value;
      },
      get _defaultValues() {
        return _defaultValues;
      },
      get _names() {
        return _names;
      },
      set _names(value) {
        _names = value;
      },
      get _formState() {
        return _formState;
      },
      get _options() {
        return _options;
      },
      set _options(value) {
        _options = {
          ..._options,
          ...value
        };
      }
    },
    subscribe,
    trigger,
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    resetField,
    clearErrors,
    unregister,
    setError,
    setFocus,
    getFieldState
  };
  return {
    ...methods,
    formControl: methods
  };
}
function useForm(props = {}) {
  const _formControl = React.useRef(void 0);
  const _values = React.useRef(void 0);
  const [formState, updateFormState] = React.useState({
    isDirty: false,
    isValidating: false,
    isLoading: isFunction(props.defaultValues),
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: props.errors || {},
    disabled: props.disabled || false,
    isReady: false,
    defaultValues: isFunction(props.defaultValues) ? void 0 : props.defaultValues
  });
  if (!_formControl.current) {
    if (props.formControl) {
      _formControl.current = {
        ...props.formControl,
        formState
      };
      if (props.defaultValues && !isFunction(props.defaultValues)) {
        props.formControl.reset(props.defaultValues, props.resetOptions);
      }
    } else {
      const { formControl, ...rest } = createFormControl(props);
      _formControl.current = {
        ...rest,
        formState
      };
    }
  }
  const control = _formControl.current.control;
  control._options = props;
  useIsomorphicLayoutEffect(() => {
    const sub = control._subscribe({
      formState: control._proxyFormState,
      callback: () => updateFormState({ ...control._formState }),
      reRenderRoot: true
    });
    updateFormState((data) => ({
      ...data,
      isReady: true
    }));
    control._formState.isReady = true;
    return sub;
  }, [control]);
  React.useEffect(() => control._disableForm(props.disabled), [control, props.disabled]);
  React.useEffect(() => {
    if (props.mode) {
      control._options.mode = props.mode;
    }
    if (props.reValidateMode) {
      control._options.reValidateMode = props.reValidateMode;
    }
  }, [control, props.mode, props.reValidateMode]);
  React.useEffect(() => {
    if (props.errors) {
      control._setErrors(props.errors);
      control._focusError();
    }
  }, [control, props.errors]);
  React.useEffect(() => {
    props.shouldUnregister && control._subjects.state.next({
      values: control._getWatch()
    });
  }, [control, props.shouldUnregister]);
  React.useEffect(() => {
    if (control._proxyFormState.isDirty) {
      const isDirty = control._getDirty();
      if (isDirty !== formState.isDirty) {
        control._subjects.state.next({
          isDirty
        });
      }
    }
  }, [control, formState.isDirty]);
  React.useEffect(() => {
    var _a;
    if (props.values && !deepEqual(props.values, _values.current)) {
      control._reset(props.values, {
        keepFieldsRef: true,
        ...control._options.resetOptions
      });
      if (!((_a = control._options.resetOptions) === null || _a === void 0 ? void 0 : _a.keepIsValid)) {
        control._setValid();
      }
      _values.current = props.values;
      updateFormState((state) => ({ ...state }));
    } else {
      control._resetDefaultValues();
    }
  }, [control, props.values]);
  React.useEffect(() => {
    if (!control._state.mount) {
      control._setValid();
      control._state.mount = true;
    }
    if (control._state.watch) {
      control._state.watch = false;
      control._subjects.state.next({ ...control._formState });
    }
    control._removeUnmounted();
  });
  _formControl.current.formState = React.useMemo(() => getProxyFormState(formState, control), [control, formState]);
  return _formControl.current;
}
function BookingConfirmationModal({
  booking,
  onClose
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-50 flex items-center justify-center",
      style: { background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" },
      onClick: onClose,
      "aria-labelledby": "modal-title",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.92, y: 24 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.92, y: 24 },
          transition: { type: "spring", stiffness: 300, damping: 28 },
          className: "rounded-2xl p-8 max-w-sm w-full mx-4",
          style: {
            background: "white",
            boxShadow: "0 24px 64px rgba(0,0,0,0.2)"
          },
          onClick: (e) => e.stopPropagation(),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "rounded-full flex items-center justify-center",
                style: {
                  width: 64,
                  height: 64,
                  background: "#E8F5EE",
                  border: "3px solid #1A7A4C"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    width: "28",
                    height: "28",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#1A7A4C",
                    strokeWidth: "2.5",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M20 6L9 17l-5-5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  id: "modal-title",
                  className: "text-xl font-bold",
                  style: { fontFamily: "var(--font-display)", color: "#1a1a1a" },
                  children: "Booking Requested!"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "text-sm mt-2",
                  style: { color: "#4b5563", fontFamily: "var(--font-body)" },
                  children: [
                    "Your booking for ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: booking.tripName }),
                    " has been submitted. Our team will confirm within 24 hours."
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "w-full py-3 rounded-xl font-bold text-white text-sm",
                style: {
                  background: "#1A7A4C",
                  border: "none",
                  fontFamily: "var(--font-body)",
                  cursor: "pointer"
                },
                "data-ocid": "booking.modal_close_button",
                children: "Got it!"
              }
            )
          ] })
        }
      )
    }
  ) });
}
function BookingForm({
  tripId,
  tripName,
  defaultDate = "",
  priceUSD,
  priceINR
}) {
  var _a, _b, _c, _d, _e, _f;
  const { loginStatus, login } = useInternetIdentity();
  const { submitBooking, isSubmitting, error } = useBooking();
  const [confirmed, setConfirmed] = reactExports.useState(null);
  const [open, setOpen] = reactExports.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      selectedDate: defaultDate,
      participants: "1"
    }
  });
  const isLoggedIn = loginStatus === "success";
  const onSubmit = async (data) => {
    const result = await submitBooking({
      tripId,
      tripName,
      selectedDate: data.selectedDate,
      participants: BigInt(Number.parseInt(data.participants, 10)),
      name: data.name,
      email: data.email,
      phone: data.phone,
      nationality: data.nationality
    });
    if (result) {
      setConfirmed(result);
      setOpen(true);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": "booking_form.panel",
      style: {
        background: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "12px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              fontFamily: "var(--font-display)",
              fontSize: "18px",
              fontWeight: 600,
              color: "var(--text-primary)",
              letterSpacing: "0.04em"
            },
            children: "Book This Expedition"
          }
        ),
        (priceUSD || priceINR) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              display: "flex",
              gap: "12px",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "var(--accent-gold)"
            },
            children: [
              priceUSD && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "USD $",
                priceUSD.toLocaleString()
              ] }),
              priceUSD && priceINR && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-muted)" }, children: "·" }),
              priceINR && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "var(--text-secondary)" }, children: [
                "₹",
                priceINR.toLocaleString()
              ] })
            ]
          }
        ),
        !isLoggedIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 6 },
            animate: { opacity: 1, y: 0 },
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              padding: "20px 0",
              textAlign: "center"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  width: "36",
                  height: "36",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "var(--accent-blue)",
                  strokeWidth: "1.5",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6
                  },
                  children: "Sign in with Internet Identity to book your expedition and track your reservation."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "booking_form.login_button",
                  onClick: () => login(),
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "44px",
                    padding: "0 24px",
                    background: "var(--accent-blue)",
                    color: "var(--text-inverse)",
                    borderRadius: "var(--btn-radius)",
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    border: "none",
                    transition: "background 150ms ease, box-shadow 150ms ease"
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.background = "var(--accent-blue-hover)";
                    e.currentTarget.style.boxShadow = "var(--shadow-glow-blue)";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.background = "var(--accent-blue)";
                    e.currentTarget.style.boxShadow = "none";
                  },
                  children: "Sign In to Book"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "https://wa.me/918882306635",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-ocid": "booking_form.whatsapp_button",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    height: "44px",
                    padding: "0 24px",
                    background: "transparent",
                    color: "var(--whatsapp-green)",
                    border: "1px solid var(--whatsapp-green)",
                    borderRadius: "var(--btn-radius)",
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textDecoration: "none",
                    transition: "background 150ms ease"
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.background = "rgba(37,211,102,0.1)";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.background = "transparent";
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        "aria-hidden": "true",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "var(--whatsapp-green)",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
                      }
                    ),
                    "WhatsApp Us"
                  ]
                }
              )
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.form,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            onSubmit: handleSubmit(onSubmit),
            style: { display: "flex", flexDirection: "column", gap: "14px" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FormField,
                {
                  label: "Departure Date",
                  error: (_a = errors.selectedDate) == null ? void 0 : _a.message,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      ...register("selectedDate", {
                        required: "Please select a date"
                      }),
                      type: "text",
                      placeholder: "e.g. 15 Jun 2026",
                      "data-ocid": "booking_form.date_input",
                      style: inputStyle
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Participants", error: (_b = errors.participants) == null ? void 0 : _b.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  ...register("participants", { required: "Required" }),
                  "data-ocid": "booking_form.participants_select",
                  style: inputStyle,
                  children: Array.from({ length: 20 }, (_, i) => i + 1).map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: n, children: [
                    n,
                    " ",
                    n === 1 ? "person" : "people"
                  ] }, n))
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Full Name", error: (_c = errors.name) == null ? void 0 : _c.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ...register("name", {
                    required: "Name is required",
                    minLength: { value: 2, message: "Name too short" }
                  }),
                  type: "text",
                  placeholder: "Your full name",
                  "data-ocid": "booking_form.name_input",
                  style: inputStyle
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Email", error: (_d = errors.email) == null ? void 0 : _d.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@]+$/,
                      message: "Invalid email"
                    }
                  }),
                  type: "email",
                  placeholder: "you@example.com",
                  "data-ocid": "booking_form.email_input",
                  style: inputStyle
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Phone / WhatsApp", error: (_e = errors.phone) == null ? void 0 : _e.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ...register("phone", { required: "Phone is required" }),
                  type: "tel",
                  placeholder: "+91 98765 43210",
                  "data-ocid": "booking_form.phone_input",
                  style: inputStyle
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Nationality", error: (_f = errors.nationality) == null ? void 0 : _f.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ...register("nationality", {
                    required: "Nationality is required"
                  }),
                  type: "text",
                  placeholder: "e.g. Indian, British",
                  "data-ocid": "booking_form.nationality_input",
                  style: inputStyle
                }
              ) }),
              error && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  "data-ocid": "booking_form.error_state",
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    color: "var(--error)",
                    background: "rgba(255,80,80,0.08)",
                    border: "1px solid rgba(255,80,80,0.2)",
                    borderRadius: "6px",
                    padding: "8px 12px"
                  },
                  children: error
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  disabled: isSubmitting,
                  "data-ocid": "booking_form.submit_button",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    height: "48px",
                    background: isSubmitting ? "var(--bg-surface)" : "var(--accent-blue)",
                    color: "var(--text-inverse)",
                    borderRadius: "var(--btn-radius)",
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    border: "none",
                    transition: "background 150ms ease, box-shadow 150ms ease",
                    opacity: isSubmitting ? 0.6 : 1
                  },
                  onMouseEnter: (e) => {
                    if (!isSubmitting)
                      e.currentTarget.style.background = "var(--accent-blue-hover)";
                  },
                  onMouseLeave: (e) => {
                    if (!isSubmitting)
                      e.currentTarget.style.background = "var(--accent-blue)";
                  },
                  children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        "aria-hidden": "true",
                        width: "14",
                        height: "14",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        style: { animation: "spin 0.8s linear infinite" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" })
                      }
                    ),
                    "Submitting…"
                  ] }) : "CONFIRM BOOKING"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    textAlign: "center",
                    lineHeight: 1.5
                  },
                  children: "No payment required now · Our team will confirm availability within 24h"
                }
              )
            ]
          },
          "booking-form"
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && confirmed && /* @__PURE__ */ jsxRuntimeExports.jsx(
          BookingConfirmationModal,
          {
            booking: confirmed,
            onClose: () => setOpen(false)
          }
        ) })
      ]
    }
  );
}
function FormField({
  label,
  id,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "5px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "label",
      {
        htmlFor: id,
        style: {
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          color: "var(--text-muted)",
          textTransform: "uppercase"
        },
        children: label
      }
    ),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        style: {
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          color: "var(--error)"
        },
        children: error
      }
    )
  ] });
}
const inputStyle = {
  width: "100%",
  height: "38px",
  padding: "0 10px",
  background: "var(--bg-surface)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "6px",
  fontFamily: "var(--font-body)",
  fontSize: "13px",
  color: "var(--text-primary)",
  outline: "none",
  boxSizing: "border-box"
};
function backendTripToFrontend(t) {
  return {
    id: t.id,
    name: t.name,
    region: t.region,
    country: t.country,
    subRegion: t.subRegion,
    tripType: t.tripType,
    difficulty: t.difficulty,
    difficultyGrade: Number(t.difficultyGrade),
    duration: Number(t.duration),
    maxAltitude: Number(t.maxAltitude),
    maxGroup: Number(t.maxGroup),
    departureDate: t.departureDate,
    returnDate: t.returnDate,
    priceINR: t.priceINR !== void 0 ? Number(t.priceINR) : void 0,
    priceUSD: t.priceUSD !== void 0 ? Number(t.priceUSD) : void 0,
    isPremium: t.isPremium,
    isOnRequest: t.isOnRequest,
    imageUrl: t.imageUrl ?? "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    season: t.season,
    slug: t.slug
  };
}
function useTripBySlug(slug) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["trip", slug],
    queryFn: async () => {
      if (!actor) return allTrips.find((t) => t.slug === slug) ?? null;
      try {
        const result = await actor.getTripBySlug(slug);
        return result ? backendTripToFrontend(result) : null;
      } catch {
        return allTrips.find((t) => t.slug === slug) ?? null;
      }
    },
    enabled: !isFetching && !!slug,
    initialData: allTrips.find((t) => t.slug === slug) ?? null
  });
}
function getDifficultyColor(grade) {
  const c = {
    1: "var(--diff-1)",
    2: "var(--diff-2)",
    3: "var(--diff-3)",
    4: "var(--diff-4)",
    5: "var(--diff-5)",
    6: "var(--diff-6)",
    7: "var(--diff-7)",
    8: "var(--diff-8)"
  };
  return c[grade] ?? "var(--text-muted)";
}
function getHeroImage(trip) {
  if (trip.country === "Nepal")
    return "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=85";
  if (trip.country === "Bhutan")
    return "https://images.unsplash.com/photo-1609868888839-ebd9fd32d3c3?w=1600&q=85";
  if (trip.subRegion === "Ladakh")
    return "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=85";
  if (trip.subRegion === "Kashmir")
    return "https://images.unsplash.com/photo-1596985558987-82aad18e9f5a?w=1600&q=85";
  if (trip.tripType === "Climb" || trip.tripType === "Expedition")
    return "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=85";
  return "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85";
}
function formatINR(n) {
  return `₹${n.toLocaleString("en-IN")}`;
}
function CheckIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      "aria-hidden": "true",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--success)",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: { flexShrink: 0 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "20 6 9 17 4 12" })
    }
  );
}
function XIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      "aria-hidden": "true",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--error)",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: { flexShrink: 0 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
      ]
    }
  );
}
function ChevronIcon({ open }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      "aria-hidden": "true",
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        transition: "transform 300ms ease",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        flexShrink: 0
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "6 9 12 15 18 9" })
    }
  );
}
function generateItinerary(trip) {
  const days = [];
  const dest = trip.subRegion || trip.region;
  const isClimb = trip.tripType === "Climb";
  const baseAlt = trip.country === "India" && trip.subRegion === "Ladakh" ? 3500 : 1300;
  const peak = trip.maxAltitude;
  const altStep = Math.round((peak - baseAlt) / (trip.duration - 2));
  const templates = [
    {
      heading: `Arrive Delhi / Fly to ${dest === "Ladakh" ? "Leh" : dest === "Nepal" ? "Kathmandu" : dest}`,
      alt: baseAlt,
      accommodation: "Hotel",
      notes: "Arrival, meet and greet, trip briefing. Rest and acclimatize."
    },
    {
      heading: "Acclimatization day — explore local area",
      alt: baseAlt,
      accommodation: "Hotel",
      notes: "Rest day to acclimatize to the altitude. Short walks, gear check, and team briefing."
    },
    {
      heading: "Drive / Trek to base camp trailhead",
      alt: baseAlt + altStep,
      accommodation: "Tented camp",
      notes: "Scenic drive through mountain roads with stunning valley views. First camp setup."
    },
    {
      heading: "Trek through alpine meadows",
      alt: baseAlt + altStep * 2,
      accommodation: "Tented camp",
      notes: "Beautiful trek through flower-filled meadows. Views of surrounding peaks open up."
    },
    {
      heading: "Cross high pass — panoramic summit views",
      alt: baseAlt + altStep * 3,
      accommodation: "Tented camp",
      notes: isClimb ? "Technical section. Fixed ropes used. Ice axe and crampons required." : "The most rewarding pass of the route. 360° Himalayan panorama."
    },
    {
      heading: "Trek to high camp",
      alt: baseAlt + altStep * 4,
      accommodation: "High camp",
      notes: "Altitude increases. Take it slow, stay hydrated. Excellent views of the main peak."
    },
    {
      heading: isClimb ? "Summit push — summit day" : "Summit plateau approach",
      alt: peak,
      accommodation: isClimb ? "High camp" : "Tented camp",
      notes: isClimb ? `The big day. Early alpine start. Push for the ${trip.maxAltitude}m summit. Rope teams in use.` : "Approach the high plateau. Outstanding wilderness scenery."
    },
    {
      heading: "Descend to lower camp",
      alt: baseAlt + altStep * 2,
      accommodation: "Tented camp",
      notes: "Rapid descent. Knees will feel it — use trekking poles. Celebratory meal at camp."
    },
    {
      heading: "Trek back to roadhead",
      alt: baseAlt + altStep,
      accommodation: "Hotel or guesthouse",
      notes: "Final trek day. Reflect on the journey. Hot shower and warm meal await."
    },
    {
      heading: "Return to Delhi / Depart",
      alt: baseAlt,
      accommodation: "Hotel",
      notes: "Drive or fly out. Final group dinner. Certificate presentation."
    }
  ];
  for (let i = 0; i < trip.duration; i++) {
    const t = templates[Math.min(i, templates.length - 1)];
    const alt = Math.min(baseAlt + altStep * i, peak);
    const normalized = i >= trip.duration - 1 ? baseAlt : Math.max(baseAlt, alt);
    days.push({
      day: i + 1,
      heading: i === 0 ? templates[0].heading : i === 1 ? templates[1].heading : i === trip.duration - 1 ? templates[9].heading : t.heading,
      altitude: normalized,
      accommodation: t.accommodation,
      notes: t.notes
    });
  }
  return days;
}
function getGalleryImages(trip) {
  const base = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
    "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=900&q=80",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
    "https://images.unsplash.com/photo-1609868888839-ebd9fd32d3c3?w=900&q=80",
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80",
    "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=900&q=80"
  ];
  if (trip.subRegion === "Ladakh")
    return [base[3], base[0], base[1], base[2], base[6], base[7]];
  if (trip.country === "Nepal")
    return [base[4], base[1], base[0], base[7], base[2], base[8]];
  if (trip.country === "Bhutan")
    return [base[5], base[0], base[2], base[4], base[6], base[8]];
  return base.slice(0, 6);
}
function getFAQs(trip) {
  const isEasy = trip.difficultyGrade <= 3;
  const isClimb = trip.tripType === "Climb";
  return [
    {
      q: "Is this trip suitable for beginners?",
      a: isEasy ? `Yes — the ${trip.name} is designed for first-time trekkers. No prior mountain experience is required, though a reasonable level of fitness is recommended.` : isClimb ? `No prior mountaineering experience is strictly required, but a good base fitness level and some prior trekking experience at altitude is strongly recommended for ${trip.name}.` : `Some trekking experience is recommended for ${trip.name}. You should be comfortable walking 6–8 hours on consecutive days on rough terrain.`
    },
    {
      q: "What fitness level is required?",
      a: isClimb ? "You should be able to run 5km comfortably, do regular cardio training, and ideally have completed a challenging multi-day trek at altitude before this expedition." : "You should be physically active — capable of walking 5–7 hours a day on consecutive days. Regular running, hiking, or cycling 3–4 times a week for 2 months before the trip will prepare you well."
    },
    {
      q: "What is included in the price?",
      a: "The price includes all accommodation on trek (tented camps), all meals from Day 2 to the second-to-last day, an experienced mountain guide, all permits and entry fees, porters/mules for equipment, a first aid kit, and emergency oxygen. Flights and travel insurance are not included."
    },
    {
      q: "What gear do I need to bring?",
      a: isClimb ? "You will need a 4-season sleeping bag (rated to -20°C), mountaineering boots, crampons, an ice axe, helmet, and harness. A full gear list will be sent after booking. White Magic provides technical group equipment." : "Essential gear includes trekking boots (broken in), thermal base layers, a down jacket, waterproof outer layers, a 3-season sleeping bag (rated to -10°C), trekking poles, and a 40L daypack. A full gear list is sent after booking."
    },
    {
      q: "What happens if weather or conditions are unsafe?",
      a: "Your safety is our absolute priority. If our guides assess conditions as unsafe, departures or summit attempts may be postponed or cancelled. We always have contingency plans in place. Refund and rescheduling terms are covered in our booking T&Cs."
    },
    {
      q: "Do you provide rescue and emergency support?",
      a: "Yes. All White Magic trips carry a comprehensive first aid kit and emergency oxygen. Our guides are trained in wilderness first aid and high-altitude medicine. We maintain communication with local rescue teams and can arrange helicopter evacuation in genuine emergencies."
    }
  ];
}
function SkeletonBlock({
  w,
  h,
  radius = 8
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        width: w ?? "100%",
        height: `${h}px`,
        background: "var(--bg-elevated)",
        borderRadius: `${radius}px`,
        animation: "pulse 1.5s ease-in-out infinite"
      }
    }
  );
}
function TripDetailSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "var(--bg-primary)", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: "@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "65vh", background: "var(--bg-elevated)" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 24px",
          display: "flex",
          gap: "40px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "16px"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonBlock, { h: 48, w: "60%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonBlock, { h: 20 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonBlock, { h: 20 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonBlock, { h: 20, w: "80%" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "320px", flexShrink: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonBlock, { h: 360, radius: 20 }) })
        ]
      }
    )
  ] });
}
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext
}) {
  reactExports.useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": "trip_gallery.dialog",
      onClick: onClose,
      role: "presentation",
      onKeyDown: (e) => {
        e.stopPropagation();
      },
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(8,10,12,0.97)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            "data-ocid": "trip_gallery.close_button",
            type: "button",
            onClick: onClose,
            style: {
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "44px",
              height: "44px",
              background: "var(--bg-elevated)",
              border: "1px solid var(--border-default)",
              borderRadius: "50%",
              color: "var(--text-primary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                "aria-hidden": "true",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            "data-ocid": "trip_gallery.prev_button",
            type: "button",
            onClick: (e) => {
              e.stopPropagation();
              onPrev();
            },
            style: {
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                "aria-hidden": "true",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "15 18 9 12 15 6" })
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: images[index],
            alt: `Scene ${index + 1}`,
            onClick: (e) => e.stopPropagation(),
            onKeyDown: (e) => {
              e.stopPropagation();
            },
            style: {
              maxHeight: "85vh",
              maxWidth: "90vw",
              objectFit: "contain",
              borderRadius: "8px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            "data-ocid": "trip_gallery.next_button",
            type: "button",
            onClick: (e) => {
              e.stopPropagation();
              onNext();
            },
            style: {
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                "aria-hidden": "true",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "9 18 15 12 9 6" })
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "var(--text-secondary)"
            },
            children: [
              index + 1,
              " / ",
              images.length
            ]
          }
        )
      ]
    }
  );
}
function TripDetail() {
  const { slug } = useParams({ strict: false });
  const { data: trip, isLoading } = useTripBySlug(slug ?? "");
  const [activeTab, setActiveTab] = reactExports.useState(0);
  const [openDay, setOpenDay] = reactExports.useState(0);
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const [lightboxIndex, setLightboxIndex] = reactExports.useState(null);
  const tabRefs = reactExports.useRef([]);
  reactExports.useEffect(() => {
    if (trip) document.title = `${trip.name} | White Magic Adventure Travel`;
    return () => {
      document.title = "White Magic Adventure Travel";
    };
  }, [trip]);
  const scrollToTab = reactExports.useCallback((idx) => {
    setActiveTab(idx);
    const el = tabRefs.current[idx];
    if (el)
      el.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
  }, []);
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(TripDetailSkeleton, {});
  if (!trip) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg-primary)",
          gap: "20px",
          paddingTop: "var(--nav-height)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              style: {
                fontFamily: "var(--font-mono)",
                fontSize: "72px",
                color: "var(--accent-blue)",
                lineHeight: 1
              },
              children: "404"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              style: {
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "32px",
                color: "var(--text-primary)"
              },
              children: "Trip Not Found"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "var(--text-secondary)"
              },
              children: "This adventure doesn't exist on our routes."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/trips",
              style: {
                height: "44px",
                padding: "0 28px",
                background: "var(--accent-blue)",
                color: "var(--text-inverse)",
                borderRadius: "var(--btn-radius)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center"
              },
              children: "Browse All Trips"
            }
          )
        ]
      }
    );
  }
  const diffColor = getDifficultyColor(trip.difficultyGrade);
  const heroImg = getHeroImage(trip);
  const itinerary = generateItinerary(trip);
  const galleryImages = getGalleryImages(trip);
  const faqs = getFAQs(trip);
  const tabs = [
    "Overview",
    "Itinerary",
    "Inclusions",
    "Dates & Prices",
    "Gallery",
    "FAQs"
  ];
  const relatedTrips = allTrips.filter(
    (t) => t.id !== trip.id && (t.region === trip.region || t.difficultyGrade === trip.difficultyGrade)
  ).slice(0, 4);
  const contactHref = `/contact?trip=${encodeURIComponent(trip.name)}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "var(--bg-primary)", minHeight: "100vh" }, children: [
    lightboxIndex !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Lightbox,
      {
        images: galleryImages,
        index: lightboxIndex,
        onClose: () => setLightboxIndex(null),
        onPrev: () => setLightboxIndex(
          (i) => i !== null && i > 0 ? i - 1 : galleryImages.length - 1
        ),
        onNext: () => setLightboxIndex(
          (i) => i !== null && i < galleryImages.length - 1 ? i + 1 : 0
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          position: "relative",
          height: "clamp(400px, 65vh, 700px)",
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: heroImg,
              alt: trip.name,
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 30%"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                position: "absolute",
                inset: 0,
                background: "var(--gradient-hero)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "0 48px 40px",
                maxWidth: "1280px",
                margin: "0 auto"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "var(--text-muted)",
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      flexWrap: "wrap"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: "/",
                          style: { color: "var(--text-muted)", textDecoration: "none" },
                          children: "Home"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: "/trips",
                          style: { color: "var(--text-muted)", textDecoration: "none" },
                          children: "Trips"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-secondary)" }, children: trip.subRegion ?? trip.region }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-primary)" }, children: trip.name })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontWeight: 600,
                      fontSize: "clamp(36px, 5vw, 64px)",
                      color: "var(--text-primary)",
                      lineHeight: 1.1,
                      marginBottom: "16px",
                      maxWidth: "800px"
                    },
                    children: trip.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: [
                  [
                    trip.subRegion ? `${trip.country}, ${trip.subRegion}` : trip.region,
                    `${trip.duration} Days`
                  ].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        background: "var(--bg-elevated)",
                        border: "1px solid var(--border-default)",
                        color: "var(--text-secondary)",
                        fontFamily: "var(--font-body)",
                        fontSize: "12px",
                        fontWeight: 500,
                        padding: "4px 12px",
                        borderRadius: "var(--radius-full)"
                      },
                      children: tag
                    },
                    tag
                  )),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        background: `${diffColor}22`,
                        border: `1px solid ${diffColor}`,
                        color: diffColor,
                        fontFamily: "var(--font-body)",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        padding: "4px 12px",
                        borderRadius: "var(--radius-full)"
                      },
                      children: trip.difficulty.toUpperCase()
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "trip_detail.tab_nav",
        style: {
          position: "sticky",
          top: "var(--nav-height)",
          zIndex: 50,
          background: "var(--bg-primary)",
          borderBottom: "1px solid var(--border-subtle)",
          overflowX: "auto"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 48px",
              display: "flex",
              gap: "0"
            },
            children: tabs.map((tab, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `trip_detail.tab.${i + 1}`,
                ref: (el) => {
                  tabRefs.current[i] = el;
                },
                onClick: () => scrollToTab(i),
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: activeTab === i ? "var(--text-primary)" : "var(--text-muted)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "16px 20px",
                  borderBottom: activeTab === i ? "2px solid var(--accent-blue)" : "2px solid transparent",
                  transition: "color 150ms ease",
                  whiteSpace: "nowrap"
                },
                onMouseEnter: (e) => {
                  if (activeTab !== i)
                    e.currentTarget.style.color = "var(--text-secondary)";
                },
                onMouseLeave: (e) => {
                  if (activeTab !== i)
                    e.currentTarget.style.color = "var(--text-muted)";
                },
                children: tab
              },
              tab
            ))
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 48px",
          display: "flex",
          gap: "48px",
          alignItems: "flex-start"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
            activeTab === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "trip_detail.overview_section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontStyle: "italic",
                    fontSize: "18px",
                    color: "var(--text-primary)",
                    lineHeight: 1.7,
                    marginBottom: "24px"
                  },
                  children: trip.country === "Nepal" ? `The ${trip.name} is one of the most breathtaking journeys in the Nepal Himalaya — a carefully crafted route that balances stunning landscapes with achievable daily targets.` : trip.tripType === "Climb" ? `The ${trip.name} offers mountaineers a genuine high-altitude challenge in some of the world's most dramatic terrain. Expert-led, well-equipped, and meticulously planned.` : `The ${trip.name} takes you deep into the heart of the Indian Himalaya — through remote valleys, ancient trails, and landscapes that few modern travellers ever witness.`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                    marginBottom: "16px"
                  },
                  children: "With an experienced White Magic guide leading every step, you can focus entirely on the experience — the views, the culture, the physical and personal achievement — while we handle all logistics, permits, and safety protocols."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                    marginBottom: "36px"
                  },
                  children: [
                    "The maximum altitude of ",
                    trip.maxAltitude.toLocaleString(),
                    "m means acclimatization days are built into the schedule. Our guides are trained in high-altitude medicine and carry emergency oxygen on all trips above 5,000m. Group size is limited to",
                    " ",
                    trip.maxGroup,
                    " participants to ensure quality and safety."
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "16px"
                  },
                  children: [
                    {
                      icon: "🏔",
                      title: trip.tripType === "Climb" ? "Summit Opportunity" : "Spectacular Scenery",
                      desc: trip.tripType === "Climb" ? `Attempt the ${trip.maxAltitude.toLocaleString()}m summit with expert guides` : "Passes, valleys, and panoramas that stay with you for life"
                    },
                    {
                      icon: "🧭",
                      title: "Expert Mountain Guides",
                      desc: "IMF-certified, English-speaking guides with 10+ years of Himalayan experience"
                    },
                    {
                      icon: trip.season[0] === "spring" ? "🌸" : trip.season[0] === "fall" ? "🍂" : "☀️",
                      title: "Best Season Window",
                      desc: `${trip.season.map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" / ")} — optimal weather and visibility`
                    }
                  ].map((box) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        background: "var(--bg-elevated)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-md)",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "24px" }, children: box.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "var(--text-primary)"
                            },
                            children: box.title
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontSize: "13px",
                              color: "var(--text-secondary)",
                              lineHeight: 1.6
                            },
                            children: box.desc
                          }
                        )
                      ]
                    },
                    box.title
                  ))
                }
              )
            ] }),
            activeTab === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "trip_detail.itinerary_section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "28px",
                    color: "var(--text-primary)",
                    marginBottom: "24px"
                  },
                  children: "Day-by-Day Itinerary"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: { display: "flex", flexDirection: "column", gap: "2px" },
                  children: itinerary.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-md)",
                        overflow: "hidden",
                        background: openDay === day.day - 1 ? "var(--bg-elevated)" : "var(--bg-surface)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            "data-ocid": `trip_itinerary.item.${day.day}`,
                            onClick: () => setOpenDay(openDay === day.day - 1 ? null : day.day - 1),
                            style: {
                              width: "100%",
                              padding: "16px 20px",
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              textAlign: "left"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "span",
                                {
                                  style: {
                                    flexShrink: 0,
                                    background: "var(--accent-blue-dim)",
                                    border: "1px solid var(--accent-blue)",
                                    color: "var(--accent-blue)",
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "11px",
                                    fontWeight: 500,
                                    padding: "2px 8px",
                                    borderRadius: "var(--radius-full)",
                                    minWidth: "52px",
                                    textAlign: "center"
                                  },
                                  children: [
                                    "DAY ",
                                    day.day
                                  ]
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  style: {
                                    flex: 1,
                                    fontFamily: "var(--font-body)",
                                    fontSize: "15px",
                                    fontWeight: 500,
                                    color: "var(--text-primary)"
                                  },
                                  children: day.heading
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "span",
                                {
                                  style: {
                                    flexShrink: 0,
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "12px",
                                    color: "var(--accent-blue)",
                                    background: "var(--accent-blue-dim)",
                                    padding: "2px 8px",
                                    borderRadius: "var(--radius-full)"
                                  },
                                  children: [
                                    day.altitude.toLocaleString(),
                                    "m"
                                  ]
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronIcon, { open: openDay === day.day - 1 })
                            ]
                          }
                        ),
                        openDay === day.day - 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            style: {
                              padding: "0 20px 20px 20px",
                              borderTop: "1px solid var(--border-subtle)",
                              paddingTop: "16px",
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  style: {
                                    fontFamily: "var(--font-body)",
                                    fontSize: "14px",
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.7
                                  },
                                  children: day.notes
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    gap: "20px",
                                    flexWrap: "wrap"
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                      "span",
                                      {
                                        style: {
                                          fontFamily: "var(--font-body)",
                                          fontSize: "13px",
                                          color: "var(--text-muted)"
                                        },
                                        children: [
                                          "🏕",
                                          " ",
                                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-secondary)" }, children: "Accommodation:" }),
                                          " ",
                                          day.accommodation
                                        ]
                                      }
                                    ),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                      "span",
                                      {
                                        style: {
                                          fontFamily: "var(--font-body)",
                                          fontSize: "13px",
                                          color: "var(--text-muted)"
                                        },
                                        children: [
                                          "🍽",
                                          " ",
                                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-secondary)" }, children: "Meals:" }),
                                          " ",
                                          "B / L / D"
                                        ]
                                      }
                                    )
                                  ]
                                }
                              )
                            ]
                          }
                        )
                      ]
                    },
                    day.day
                  ))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AltitudeProfile, { days: itinerary })
            ] }),
            activeTab === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "trip_detail.inclusions_section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "28px",
                    color: "var(--text-primary)",
                    marginBottom: "28px"
                  },
                  children: "What's Included"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "40px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            fontFamily: "var(--font-body)",
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "var(--success)",
                            letterSpacing: "0.15em",
                            marginBottom: "20px"
                          },
                          children: "WHAT'S INCLUDED"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px"
                          },
                          children: [
                            "All tented accommodation on trek",
                            "All meals during trek (breakfast, lunch, dinner)",
                            "Experienced mountain guide (IMF-certified)",
                            ...trip.tripType === "Climb" ? ["Technical climbing equipment"] : [],
                            "Porters/mules for equipment transport",
                            "First aid kit and emergency oxygen",
                            "All permits, entry fees and royalties"
                          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                gap: "10px",
                                alignItems: "flex-start"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(CheckIcon, {}),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    style: {
                                      fontFamily: "var(--font-body)",
                                      fontSize: "14px",
                                      color: "var(--text-secondary)",
                                      lineHeight: 1.5
                                    },
                                    children: item
                                  }
                                )
                              ]
                            },
                            item
                          ))
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            fontFamily: "var(--font-body)",
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "var(--error)",
                            letterSpacing: "0.15em",
                            marginBottom: "20px"
                          },
                          children: "WHAT'S NOT INCLUDED"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px"
                          },
                          children: [
                            `Flights to/from ${trip.country === "Nepal" ? "Kathmandu" : trip.country === "Bhutan" ? "Paro" : trip.subRegion === "Ladakh" ? "Leh" : "destination"}`,
                            "Travel insurance (mandatory)",
                            `Personal ${trip.tripType === "Climb" ? "climbing" : "trekking"} gear`,
                            "Tips for guides, cooks and porters",
                            "Alcoholic beverages",
                            "Costs arising from emergency or rescue"
                          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                gap: "10px",
                                alignItems: "flex-start"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(XIcon, {}),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    style: {
                                      fontFamily: "var(--font-body)",
                                      fontSize: "14px",
                                      color: "var(--text-secondary)",
                                      lineHeight: 1.5
                                    },
                                    children: item
                                  }
                                )
                              ]
                            },
                            item
                          ))
                        }
                      )
                    ] })
                  ]
                }
              )
            ] }),
            activeTab === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "trip_detail.dates_section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "28px",
                    color: "var(--text-primary)",
                    marginBottom: "24px"
                  },
                  children: "Dates & Prices"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: [
                  "Departure",
                  "Return",
                  "Spaces",
                  "Price (INR)",
                  "Price (USD)",
                  "Action"
                ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      letterSpacing: "0.12em",
                      padding: "12px 16px",
                      textAlign: "left",
                      borderBottom: "1px solid var(--border-default)"
                    },
                    children: h.toUpperCase()
                  },
                  h
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: (trip.isOnRequest ? [
                  {
                    dep: "On Request",
                    ret: "On Request",
                    spaces: 12,
                    priceINR: trip.priceINR,
                    priceUSD: trip.priceUSD
                  }
                ] : [
                  {
                    dep: trip.departureDate ?? "TBA",
                    ret: trip.returnDate ?? "TBA",
                    spaces: 8,
                    priceINR: trip.priceINR,
                    priceUSD: trip.priceUSD
                  }
                ]).map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    style: {
                      background: i % 2 === 0 ? "var(--bg-surface)" : "var(--bg-elevated)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "td",
                        {
                          style: {
                            padding: "14px 16px",
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            color: "var(--text-primary)"
                          },
                          children: trip.isOnRequest ? /* @__PURE__ */ jsxRuntimeExports.jsx("em", { style: { color: "var(--accent-gold)" }, children: "On Request" }) : row.dep
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "td",
                        {
                          style: {
                            padding: "14px 16px",
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            color: "var(--text-secondary)"
                          },
                          children: trip.isOnRequest ? /* @__PURE__ */ jsxRuntimeExports.jsx("em", { style: { color: "var(--accent-gold)" }, children: "On Request" }) : row.ret
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "14px 16px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpacesPill, { spaces: row.spaces }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "td",
                        {
                          style: {
                            padding: "14px 16px",
                            fontFamily: "var(--font-mono)",
                            fontSize: "14px",
                            color: "var(--text-primary)",
                            fontWeight: 700
                          },
                          children: row.priceINR ? formatINR(row.priceINR) : "—"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "td",
                        {
                          style: {
                            padding: "14px 16px",
                            fontFamily: "var(--font-mono)",
                            fontSize: "14px",
                            color: "var(--text-secondary)"
                          },
                          children: row.priceUSD ? `$${row.priceUSD.toLocaleString()}` : "—"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "14px 16px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: contactHref,
                          "data-ocid": "trip_dates.book_button",
                          style: {
                            display: "inline-flex",
                            alignItems: "center",
                            height: "32px",
                            padding: "0 16px",
                            background: trip.isOnRequest ? "transparent" : "var(--accent-blue)",
                            color: trip.isOnRequest ? "var(--accent-blue)" : "var(--text-inverse)",
                            border: "1px solid var(--accent-blue)",
                            borderRadius: "var(--radius-sm)",
                            fontFamily: "var(--font-body)",
                            fontSize: "12px",
                            fontWeight: 600,
                            textDecoration: "none",
                            letterSpacing: "0.05em"
                          },
                          children: trip.isOnRequest ? "Enquire" : "Book Now"
                        }
                      ) })
                    ]
                  },
                  `row-${row.dep || i}`
                )) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    marginTop: "20px",
                    lineHeight: 1.6
                  },
                  children: "Prices are per person. Group discounts available for 4+ participants. Contact us for custom departure dates."
                }
              )
            ] }),
            activeTab === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "trip_detail.gallery_section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "28px",
                    color: "var(--text-primary)",
                    marginBottom: "24px"
                  },
                  children: "Photo Gallery"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    columns: "3",
                    columnGap: "12px"
                  },
                  children: galleryImages.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `trip_gallery.item.${i + 1}`,
                      onClick: () => setLightboxIndex(i),
                      style: {
                        marginBottom: "12px",
                        breakInside: "avoid",
                        cursor: "pointer",
                        overflow: "hidden",
                        borderRadius: "var(--radius-md)",
                        position: "relative",
                        display: "block",
                        padding: 0,
                        border: "none",
                        background: "none",
                        width: "100%"
                      },
                      onMouseEnter: (e) => {
                        const imgEl = e.currentTarget.querySelector(
                          "img"
                        );
                        if (imgEl) imgEl.style.transform = "scale(1.05)";
                      },
                      onMouseLeave: (e) => {
                        const imgEl = e.currentTarget.querySelector(
                          "img"
                        );
                        if (imgEl) imgEl.style.transform = "scale(1)";
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: img,
                          alt: `${trip.name} scene ${i + 1}`,
                          loading: "lazy",
                          style: {
                            width: "100%",
                            display: "block",
                            objectFit: "cover",
                            transition: "transform 400ms ease"
                          }
                        }
                      )
                    },
                    img
                  ))
                }
              )
            ] }),
            activeTab === 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "trip_detail.faqs_section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "28px",
                    color: "var(--text-primary)",
                    marginBottom: "24px"
                  },
                  children: "Frequently Asked Questions"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: { display: "flex", flexDirection: "column", gap: "2px" },
                  children: faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      style: {
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-md)",
                        overflow: "hidden",
                        background: openFaq === i ? "var(--bg-elevated)" : "var(--bg-surface)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            "data-ocid": `trip_faqs.item.${i + 1}`,
                            onClick: () => setOpenFaq(openFaq === i ? null : i),
                            style: {
                              width: "100%",
                              padding: "18px 20px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "12px",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              textAlign: "left"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  style: {
                                    fontFamily: "var(--font-body)",
                                    fontSize: "15px",
                                    fontWeight: 500,
                                    color: "var(--text-primary)"
                                  },
                                  children: faq.q
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronIcon, { open: openFaq === i })
                            ]
                          }
                        ),
                        openFaq === i && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            style: {
                              padding: "0 20px 20px",
                              borderTop: "1px solid var(--border-subtle)",
                              paddingTop: "16px"
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                style: {
                                  fontFamily: "var(--font-body)",
                                  fontSize: "14px",
                                  color: "var(--text-secondary)",
                                  lineHeight: 1.75,
                                  margin: 0
                                },
                                children: faq.a
                              }
                            )
                          }
                        )
                      ]
                    },
                    faq.q
                  ))
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "aside",
            {
              "data-ocid": "trip_detail.sidebar",
              style: {
                width: "320px",
                flexShrink: 0,
                position: "sticky",
                top: "calc(var(--nav-height) + 64px + 24px)",
                background: "var(--bg-surface)",
                border: "var(--card-border)",
                borderRadius: "var(--radius-xl)",
                padding: "28px",
                display: "none"
              },
              className: "trip-sidebar",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarContent, { trip, diffColor })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @media (min-width: 1024px) {
          .trip-sidebar { display: block !important; }
        }
        @media (max-width: 767px) {
          .trip-mobile-cta { display: flex !important; }
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "trip_detail.mobile_cta",
        className: "trip-mobile-cta",
        style: {
          display: "none",
          position: "sticky",
          bottom: 0,
          background: "var(--bg-surface)",
          borderTop: "1px solid var(--border-subtle)",
          padding: "16px 20px",
          gap: "12px",
          alignItems: "center",
          zIndex: 100
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [
            trip.priceINR && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  fontFamily: "var(--font-mono)",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-primary)"
                },
                children: formatINR(trip.priceINR)
              }
            ),
            trip.priceUSD && !trip.priceINR && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  fontFamily: "var(--font-mono)",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-primary)"
                },
                children: [
                  "$",
                  trip.priceUSD.toLocaleString()
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: contactHref,
              "data-ocid": "trip_detail.enquire_button",
              style: {
                height: "44px",
                padding: "0 20px",
                background: "var(--accent-blue)",
                color: "var(--text-inverse)",
                borderRadius: "var(--btn-radius)",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center"
              },
              children: "Book Now"
            }
          )
        ]
      }
    ),
    relatedTrips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          background: "var(--bg-surface)",
          borderTop: "1px solid var(--border-subtle)",
          padding: "60px 48px"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "32px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--accent-blue)",
                  letterSpacing: "0.2em",
                  marginBottom: "8px"
                },
                children: "SIMILAR ADVENTURES"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                style: {
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "32px",
                  color: "var(--text-primary)",
                  margin: 0
                },
                children: "You Might Also Like"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "24px"
              },
              children: relatedTrips.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TripCard, { trip: t, index: i }, t.id))
            }
          )
        ] })
      }
    )
  ] });
}
function SidebarContent({
  trip,
  diffColor
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "18px",
          color: "var(--text-primary)",
          lineHeight: 1.2,
          marginBottom: "20px",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical"
        },
        children: trip.name
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "20px"
        },
        children: [
          ["Duration", `${trip.duration} Days`],
          ["Max Altitude", `${trip.maxAltitude.toLocaleString()}m`],
          ["Difficulty", trip.difficulty],
          ["Group Size", `Max ${trip.maxGroup} people`]
        ].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    color: "var(--text-muted)"
                  },
                  children: label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  style: {
                    fontFamily: label === "Max Altitude" || label === "Duration" ? "var(--font-mono)" : "var(--font-body)",
                    fontSize: label === "Difficulty" ? "11px" : "13px",
                    fontWeight: label === "Difficulty" ? 700 : 500,
                    color: label === "Difficulty" ? diffColor : "var(--text-primary)",
                    letterSpacing: label === "Difficulty" ? "0.06em" : 0
                  },
                  children: value
                }
              )
            ]
          },
          label
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          height: "1px",
          background: "var(--border-subtle)",
          margin: "16px 0"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "16px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            fontWeight: 700,
            color: "var(--text-muted)",
            letterSpacing: "0.12em",
            marginBottom: "6px"
          },
          children: "NEXT DEPARTURE"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            color: trip.isOnRequest ? "var(--accent-gold)" : "var(--text-primary)",
            fontStyle: trip.isOnRequest ? "italic" : "normal"
          },
          children: trip.isOnRequest ? "On Request" : trip.departureDate ? `${trip.departureDate}${trip.returnDate ? ` – ${trip.returnDate}` : ""}` : "Contact us for dates"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          height: "1px",
          background: "var(--border-subtle)",
          margin: "16px 0"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "24px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            fontWeight: 700,
            color: "var(--text-muted)",
            letterSpacing: "0.12em",
            marginBottom: "6px"
          },
          children: "PRICE FROM"
        }
      ),
      trip.priceINR ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              fontFamily: "var(--font-mono)",
              fontSize: "26px",
              fontWeight: 700,
              color: "var(--text-primary)"
            },
            children: [
              "₹",
              trip.priceINR.toLocaleString("en-IN")
            ]
          }
        ),
        trip.priceUSD && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              color: "var(--text-muted)",
              marginTop: "2px"
            },
            children: [
              "/ $",
              trip.priceUSD.toLocaleString(),
              " USD"
            ]
          }
        )
      ] }) : trip.priceUSD ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: {
            fontFamily: "var(--font-mono)",
            fontSize: "26px",
            fontWeight: 700,
            color: "var(--text-primary)"
          },
          children: [
            "$",
            trip.priceUSD.toLocaleString()
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            color: "var(--accent-gold)",
            fontStyle: "italic"
          },
          children: "Price on request"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BookingForm,
      {
        tripId: trip.id,
        tripName: trip.name,
        defaultDate: trip.departureDate ?? "",
        priceUSD: trip.priceUSD,
        priceINR: trip.priceINR
      }
    )
  ] });
}
function AltitudeProfile({
  days
}) {
  const W = 600;
  const H = 80;
  const alts = days.map((d) => d.altitude);
  const minA = Math.min(...alts);
  const maxA = Math.max(...alts);
  const range = maxA - minA || 1;
  const points = alts.map((a, i) => {
    const x = i / (alts.length - 1) * W;
    const y = H - (a - minA) / range * (H - 10) - 5;
    return `${x},${y}`;
  }).join(" ");
  const fillPoints = `0,${H} ${points} ${W},${H}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "32px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          fontWeight: 700,
          color: "var(--text-muted)",
          letterSpacing: "0.12em",
          marginBottom: "8px"
        },
        children: "ALTITUDE PROFILE"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        "aria-hidden": "true",
        viewBox: `0 0 ${W} ${H}`,
        style: { width: "100%", height: "80px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "altGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: "var(--accent-blue)",
                stopOpacity: "0.4"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: "var(--accent-blue)",
                stopOpacity: "0.05"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: fillPoints, fill: "url(#altGrad)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "polyline",
            {
              points,
              fill: "none",
              stroke: "var(--accent-blue)",
              strokeWidth: "2",
              strokeLinejoin: "round"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--text-muted)",
          marginTop: "4px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Day 1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "var(--accent-blue)" }, children: [
            "Peak: ",
            maxA.toLocaleString(),
            "m"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Day ",
            days.length
          ] })
        ]
      }
    )
  ] });
}
function SpacesPill({ spaces }) {
  const color = spaces > 5 ? "var(--success)" : spaces >= 3 ? "var(--warning)" : spaces >= 1 ? "var(--error)" : "var(--text-muted)";
  const label = spaces > 5 ? `${spaces} spaces` : spaces >= 3 ? `${spaces} spaces` : spaces >= 1 ? `${spaces} left` : "WAITLIST";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      style: {
        background: `${color}1a`,
        border: `1px solid ${color}`,
        color,
        fontFamily: "var(--font-body)",
        fontSize: "11px",
        fontWeight: 700,
        padding: "2px 8px",
        borderRadius: "var(--radius-full)",
        letterSpacing: "0.06em"
      },
      children: label
    }
  );
}
export {
  TripDetail as default
};
