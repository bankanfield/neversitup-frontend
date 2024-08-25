export const decorateErrorFromHttp = (error: any): string => {
  let errorMessage = 'Unknown error occurred!';

  if (error.error instanceof ErrorEvent) {
    // Client-side or network error
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return errorMessage;
};
