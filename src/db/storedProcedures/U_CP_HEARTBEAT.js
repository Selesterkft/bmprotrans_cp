import mssql, { MAX } from 'mssql';
import { sqlConfig } from '../dbConnection';

export default async function U_CP_HEARTBEAT() {
  const appPool = await mssql.connect(sqlConfig);

  const sqlResult = await appPool.request()
    .output('OUT_HTTP_Code', mssql.Int)
    .output('OUT_HTTP_Message', mssql.NVarChar(MAX))

    .execute('U_CP_HEARTBEAT')

  if (sqlResult.output.OUT_HTTP_Code !== 200) {
    const error = new Error(sqlResult.output.OUT_HTTP_Message);
    error.status = sqlResult.output.OUT_HTTP_Code;
    throw error;
  }

  return {
    dbConnection: true,
  };
}
