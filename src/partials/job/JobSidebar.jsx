import React, { useState } from 'react';

function JobSidebar() {

  const [companySetting, setCompanySetting] = useState(true);
  const [immigrationSetting, setImmigrationSetting] = useState(false);

  return (
    <div className="space-y-8">
      {/* Alert */}
      <div className="relative bg-indigo-200 dark:bg-indigo-500 rounded-sm p-5 min-w-60">
        <div className="absolute bottom-0 -mb-3">
          <svg width="44" height="42" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ill-b">
                <stop stopColor="#A5B4FC" offset="0%" />
                <stop stopColor="#818CF8" offset="100%" />
              </linearGradient>
              <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="ill-c">
                <stop stopColor="#4338CA" offset="0%" />
                <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
              </linearGradient>
              <path id="ill-a" d="m20 0 20 40-20-6.25L0 40z" />
            </defs>
            <g transform="scale(-1 1) rotate(-51 -11.267 67.017)" fill="none" fillRule="evenodd">
              <mask id="ill-d" fill="#fff">
                <use xlinkHref="#ill-a" />
              </mask>
              <use fill="url(#ill-b)" xlinkHref="#ill-a" />
              <path fill="url(#ill-c)" mask="url(#ill-d)" d="M20.586-7.913h25v47.5h-25z" />
            </g>
          </svg>
        </div>
        <div className="relative">
          <div className="text-sm font-medium text-slate-800 dark:text-indigo-200 mb-2">Remember to keep track of your job research.</div>
          <div className="text-right">
            <a className="text-sm font-medium text-indigo-500 dark:text-indigo-50 hover:text-indigo-600 dark:hover:text-white" href="#0">
              Create Alert -&gt;
            </a>
          </div>
        </div>
      </div>
      {/* White box */}
      <div className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-5 min-w-60">
        <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-6">
          {/* Group 1 */}
          <div>
            <div className="text-sm text-slate-800 dark:text-slate-100 font-semibold mb-3">Tipos de Trabajo</div>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" defaultChecked />
                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium ml-2">Programación</span>
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium ml-2">Diseño</span>
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium ml-2">Finanzas</span>
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium ml-2">Atención al Cliente</span>
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium ml-2">Ventas / Marketing</span>
                </label>
              </li>
            </ul>
          </div>
          {/* Group 2 */}
          <div>
            <div className="text-sm text-slate-800 dark:text-slate-100 font-semibold mb-3">Empresas con Buen Ambiente Laboral</div>
            <div className="flex items-center">
              <div className="form-switch">
                <input
                  type="checkbox"
                  id="company-toggle"
                  className="sr-only"
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                />
                <label className="bg-slate-400 dark:bg-slate-700" htmlFor="company-toggle">
                  <span className="bg-white shadow-sm" aria-hidden="true"></span>
                  <span className="sr-only">Empresas con Buen Ambiente Laboral</span>
                </label>
              </div>
              <div className="text-sm text-slate-400 dark:text-slate-500 italic ml-2">{companySetting ? 'On' : 'Off'}</div>
            </div>
            <div className="text-sm dark:text-slate-500 italic mt-3">Mostrar únicamente empresas con un ambiente positivo</div>
          </div>
          {/* Group 3 */}
          <div>
            <div className="text-sm text-slate-800 dark:text-slate-100 font-semibold mb-3">Rango de Salario</div>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" defaultChecked />
                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium ml-2">$20 - $50</span>
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium ml-2">$50 - $100</span>
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium ml-2">&gt; $100</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSidebar;