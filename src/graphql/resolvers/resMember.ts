import { IBandNew } from '../../interfaceTS/interfaceNew.js';
import { getDataId } from '../../services/artistService/getDataId.js';

export const resMember = {
  Band: {
    members: async (band: IBandNew) => {
      return band.members.map(async (member) => {
        const artist = await getDataId(member.artistId);
        return {
          artistId: member.artistId,
          firstName: artist!.firstName,
          secondName: artist!.secondName,
          middleName: artist!.middleName,
          instrument: member.instrument,
          years: member.years
        };
      });
    }
  }
};
