import { RestResponse } from '../models/rest-response'

export function toData<T>(response: RestResponse<T>) {
  return response.data
}
