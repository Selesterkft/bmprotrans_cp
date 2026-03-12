import { U_CP_HEARTBEAT } from '../db/storedProcedures';

export const heartbeat = async (req, res) => {
  const result = {
    container: 'BM PRO TRANS CUSTOMER PORTAL Backend',
    version: 'bmprotranscp-backend-20260127-01',
    heartbeat: true,
    dbConnections: {
      BMPROTRANS: false,
    },
  }
  try {
    await U_CP_HEARTBEAT();
    result.dbConnections.BMPROTRANS = true
  } catch (error) {
    console.log(error)
    //Nothing to do
  }

  res.json(result);
};