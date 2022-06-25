import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { api } from 'src/environment/api';

@Injectable()
export class JobsService {


    /**
     * Get Job lists
     * @param params 
     */
    async jobList(query: any) {
        const request = await (await axios.get(`${api}/positions.json`, {
            params: query
        }));
        const data = request.data;
        if (data) {
            return {
                statusCode: 200,
                data
            }
        }
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    }

    /**
     * Get job Detail
     * @param jobsId 
     */
    async jobDetail(jobId: any) {
        const request = await (await axios.get(`${api}/positions/${jobId}`));
        const data = request.data;
        if (data) {
            return {
                statusCode: 200,
                data
            }
        }
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    }

}
