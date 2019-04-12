export class Logger {

  printInfoData(data: any) {
    console.info('Logger', data);
  }

  printErrorData(data: any) {
    console.error('Logger', data);
  }

  printNormalData(data: any) {
    console.log('Logger', data);
  }

  printWarnData(data: any) {
    console.warn('Logger', data);
  }

}
