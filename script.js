import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://18.118.15.53:3000');
  sleep(1);
}
