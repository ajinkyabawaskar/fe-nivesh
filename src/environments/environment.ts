// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};

export class AppConstants {
  private static API_BASE_URL = 'http://localhost:8080/';
  private static OAUTH2_URL =
    AppConstants.API_BASE_URL + 'oauth2/authorization/';
  private static REDIRECT_URL = '?redirect_uri=https://localhost:8081/';
  public static API_URL = AppConstants.API_BASE_URL + 'api/';
  public static AUTH_API = AppConstants.API_URL + 'auth/';
  public static GOOGLE_AUTH_URL =
    AppConstants.OAUTH2_URL + 'google' + AppConstants.REDIRECT_URL;
  public static TickerTapeURL =
    'https://api.tickertape.in/stocks/charts/intra/.NSEI';
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
