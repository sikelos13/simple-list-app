import { DateFormat } from '../utils/DateFormat';
import { getOrderStatus } from '../utils/getOrderStatus';
import { getHasEtaTime } from '../utils/getHasEtaTime';
import { handleErrorMessage } from '../api/utils/handleErrorMessage';

describe("Return order status", () => {
  test("it should return the normalized status ", () => {
    const input = "ready-for-pickup";

    const output = "Ready for pickup";

    expect(getOrderStatus(input)).toEqual(output);

  });
});

  describe("Return normalize time format", () => {
    test("it should return the normalize time format", () => {
      const input = "2020-04-23T09:58:52Z";
  
      const output = "Apr 23, 2020";
  
      expect(DateFormat.normalize(input)).toEqual(output);
  
    });
});

describe("Return if it has eta time ", () => {
  test("it should return boolean value for eta time", () => {
    const input = "on-the-way";

    const output = true;

    expect(getHasEtaTime(input)).toEqual(output);

  });
});

describe("Return error of api call", () => {
  test("it should return a normalized message from rejected request", () => {
    const responseApiOne = {
      error_code: ["Something went wrong please try again"]
    };

    const outputOne = "Something went wrong please try again";

    expect(handleErrorMessage(responseApiOne)).toEqual(outputOne);
  });

  test("it should return a normalized message from rejected non field errors", () => {
    const responseApiTwo = {
      non_field_errors: ["Something went wrong , contact administrator"]
    };

    const outputTwo = "Something went wrong , contact administrator";

    expect(handleErrorMessage(responseApiTwo)).toEqual(outputTwo);
  });

  test("it should return a normalized message response data object", () => {
    const responseApiThree = {
      response: {
        data: {
          non_field_errors: ["Object has some problems"]
        }
      }
    };

    const outputThree = "Object has some problems";

    expect(handleErrorMessage(responseApiThree)).toEqual(outputThree);
  });
});