import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from 'https://jslib.k6.io/k6-summary/0.0.4/index.js';


export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const res = http.get('https://test.k6.io');
  check(res, {
    'status is 200': r => r.status === 200,
  });
  sleep(1);
}

export function handleSummary(data) {
  return {
    'k6-report.html': htmlReport(data),
  };
}
