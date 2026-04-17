import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Search } from "lucide-react";

interface CompressorModel {
  hp: number;
  kw: number;
  voltage: number;
  frequency: number;
  maxCurrent: number;
  wireSize: number;
}

const compressorData: CompressorModel[] = [
  { hp: 7.5, kw: 5.5, voltage: 380, frequency: 50, maxCurrent: 15, wireSize: 6 },
  { hp: 10, kw: 7.5, voltage: 380, frequency: 50, maxCurrent: 20, wireSize: 6 },
  { hp: 15, kw: 11, voltage: 380, frequency: 50, maxCurrent: 29, wireSize: 10 },
  { hp: 20, kw: 15, voltage: 380, frequency: 50, maxCurrent: 35, wireSize: 10 },
  { hp: 30, kw: 22, voltage: 380, frequency: 50, maxCurrent: 50, wireSize: 16 },
  { hp: 40, kw: 30, voltage: 380, frequency: 50, maxCurrent: 67, wireSize: 25 },
  { hp: 50, kw: 37, voltage: 380, frequency: 50, maxCurrent: 86, wireSize: 35 },
  { hp: 75, kw: 55, voltage: 380, frequency: 50, maxCurrent: 128, wireSize: 60 },
  { hp: 100, kw: 75, voltage: 380, frequency: 50, maxCurrent: 165, wireSize: 80 },
  { hp: 125, kw: 90, voltage: 380, frequency: 50, maxCurrent: 179, wireSize: 125 },
  { hp: 150, kw: 110, voltage: 380, frequency: 50, maxCurrent: 217, wireSize: 150 },
  { hp: 175, kw: 132, voltage: 380, frequency: 50, maxCurrent: 242, wireSize: 185 },
  { hp: 220, kw: 160, voltage: 380, frequency: 50, maxCurrent: 292, wireSize: 240 },
  { hp: 270, kw: 200, voltage: 380, frequency: 50, maxCurrent: 348, wireSize: 300 },
  { hp: 340, kw: 250, voltage: 380, frequency: 50, maxCurrent: 433, wireSize: 400 },
  { hp: 430, kw: 315, voltage: 380, frequency: 50, maxCurrent: 544, wireSize: 400 },
];

export default function SpecsPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = compressorData.filter(
    (row) =>
      String(row.hp).includes(searchTerm) ||
      String(row.kw).includes(searchTerm) ||
      String(row.maxCurrent).includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 py-16">
        {/* Asymmetric Header */}
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 md:col-span-3">
            <div className="bg-surface-container-high p-4 border-l-4 border-primary">
              <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
                {t("specs.doc_ref")}
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant mt-1">
                {t("specs.status")}
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1 className="font-sans font-black text-6xl md:text-7xl tracking-tighter uppercase text-on-surface leading-none mb-4">
              {t("specs.title")}
            </h1>
            <p className="font-mono text-xl text-secondary max-w-3xl">
              Comprehensive operational metrics for DSNE AIR industrial compressor systems.
              All data represents standard operating conditions at 380V.
            </p>
          </div>
        </div>

        {/* Compressor Model Table */}
        <section className="overflow-x-auto bg-surface-container-low p-8 border-l-8 border-[#FFCE00] mb-16">
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div className="flex gap-4 flex-wrap">
              <span className="bg-surface-container-high px-3 py-1.5 font-mono text-xs uppercase font-bold text-on-surface tracking-widest">
                {t("specs.voltage")}
              </span>
              <span className="bg-surface-container-high px-3 py-1.5 font-mono text-xs uppercase font-bold text-on-surface tracking-widest">
                {t("specs.freq")}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={t("specs.search_placeholder")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-9 bg-surface-container-high border-0 border-b-2 border-outline focus:border-[#FFCE00] pl-9 pr-4 text-sm font-mono text-on-surface placeholder:text-surface-dim focus:outline-none transition-colors"
                />
              </div>
              <div className="font-mono text-sm text-secondary">
                {t("specs.data_ref")}
              </div>
            </div>
          </div>

          <table className="w-full font-mono text-sm border-2 border-outline">
            <thead>
              <tr>
                <th className="border-b-4 border-outline bg-inverse-surface text-inverse-on-surface px-6 py-4 text-left text-xs uppercase tracking-widest">
                  {t("specs.model")}
                </th>
                <th className="border-b-4 border-outline bg-inverse-surface text-inverse-on-surface px-6 py-4 text-left text-xs uppercase tracking-widest">
                  {t("specs.power_hp")}
                </th>
                <th className="border-b-4 border-outline bg-inverse-surface text-inverse-on-surface px-6 py-4 text-left text-xs uppercase tracking-widest">
                  {t("specs.power_kw")}
                </th>
                <th className="border-b-4 border-outline bg-inverse-surface text-inverse-on-surface px-6 py-4 text-left text-xs uppercase tracking-widest">
                  {t("specs.max_current")}
                </th>
                <th className="border-b-4 border-outline bg-inverse-surface text-inverse-on-surface px-6 py-4 text-left text-xs uppercase tracking-widest">
                  {t("specs.wire_size")}
                </th>
              </tr>
            </thead>
            <tbody className="text-on-surface">
              {filteredData.map((row, i) => (
                <tr
                  key={i}
                  className="border-b-2 border-outline-variant bg-surface transition-colors cursor-pointer hover:bg-inverse-surface hover:text-[#FFCE00]"
                >
                  <td className="px-6 py-4 font-bold">
                    {row.hp}/{row.kw}
                    {row.kw >= 250 && (
                      <span className="text-xs bg-[#FFCE00] text-black px-2 ml-2 font-bold">
                        {t("specs.high_capacity")}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-secondary">{row.hp}</td>
                  <td className="px-6 py-4">{row.kw}</td>
                  <td className="px-6 py-4">{row.maxCurrent}</td>
                  <td className="px-6 py-4 font-bold">{row.wireSize}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredData.length === 0 && (
            <p className="mt-4 text-center text-sm font-mono text-muted-foreground">
              No models match your search.
            </p>
          )}
        </section>

        {/* Cable Selection Reference Table */}
        <section className="mb-16">
          <div className="flex items-center gap-4 border-b-4 border-on-surface pb-4 mb-8">
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase text-on-surface">
              {t("cable.title")}
            </h2>
          </div>

          <div className="bg-[#FFCE00]/10 border border-[#FFCE00]/30 p-4 mb-6">
            <p className="font-mono text-xs text-on-surface leading-relaxed">
              {t("cable.note")}
            </p>
          </div>

          <div className="overflow-x-auto bg-surface-container-low border-2 border-outline">
            <table className="w-full font-mono text-xs">
              <thead>
                <tr className="bg-inverse-surface text-inverse-on-surface">
                  <th className="px-4 py-3 text-left text-xs uppercase tracking-widest border-b-4 border-outline">
                    {t("cable.model")}
                  </th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest border-b-4 border-outline">
                    {t("cable.voltage")}
                  </th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest border-b-4 border-outline">
                    {t("cable.frequency")}
                  </th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest border-b-4 border-outline">
                    {t("cable.current")}
                  </th>
                  <th className="px-4 py-3 text-center text-xs uppercase tracking-widest border-b-4 border-outline">
                    {t("cable.wire_size")}
                  </th>
                </tr>
              </thead>
              <tbody className="text-on-surface">
                {compressorData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b-2 border-outline-variant bg-surface transition-colors hover:bg-inverse-surface"
                  >
                    <td className="px-4 py-3 font-bold">
                      {row.hp} / {row.kw}
                      {row.kw >= 250 && (
                        <span className="text-xs bg-[#FFCE00] text-black px-2 ml-2 font-bold">
                          HIGH CAPACITY
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">{row.voltage}</td>
                    <td className="px-4 py-3 text-center">{row.frequency}</td>
                    <td className="px-4 py-3 text-center font-bold">{row.maxCurrent}</td>
                    <td className="px-4 py-3 text-center">{row.wireSize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pipe Pressure Drop Tables */}
        <section className="mb-16">
          <div className="flex items-center gap-4 border-b-4 border-on-surface pb-4 mb-8">
            <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase text-on-surface">
              {t("specs.pipe_title")}
            </h2>
          </div>

          <p className="font-mono text-sm text-on-surface-variant mb-6">
            Air flow rate vs. pipe pressure drop at 2 kg/cm² over 100 m. Values in kg/cm² per
            100 m pipe length.
          </p>

          {/* Table 1 */}
          <div className="overflow-x-auto bg-surface-container-low border-2 border-outline-variant/30 mb-8">
            <table className="w-full font-mono text-xs">
              <thead>
                <tr className="bg-surface-container-high">
                  <th className="px-3 py-3 text-left text-xs uppercase tracking-widest text-on-surface border-b-2 border-outline-variant">
                    m³/min
                  </th>
                  {["1/2\"", "3/4\"", "1\"", "1½\"", "1¾\"", "2\"", "2½\"", "3\""].map((d) => (
                    <th key={d} className="px-3 py-3 text-center text-xs uppercase tracking-widest text-on-surface border-b-2 border-outline-variant">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { flow: 0.8, vals: [5.87, 1.23, 0.339, null, null, 0.858, null, 0.038] },
                  { flow: 1.0, vals: [9.18, 1.92, 0.53, null, null, 0.134, 0.059, 0.0157] },
                  { flow: 1.6, vals: [23.5, 4.9, 1.36, null, null, 0.343, 0.152, 0.0428] },
                  { flow: 1.8, vals: [null, 62.0, 6.20, 1.72, null, 0.434, 0.192, 0.0541] },
                  { flow: 2.0, vals: [null, 7.66, 2.12, 0.536, null, 0.237, 0.0668, 0.0177] },
                  { flow: 2.2, vals: [null, 9.26, 2.56, 0.649, null, 0.287, 0.0808, 0.0214] },
                  { flow: 2.4, vals: [null, 11.0, 3.15, 0.772, null, 0.342, 0.0967, 0.0255] },
                  { flow: 2.6, vals: [null, 12.9, 3.58, 0.906, null, 0.401, 0.113, 0.0299] },
                  { flow: 3.0, vals: [null, 17.2, 4.77, 1.21, null, 0.533, 0.150, 0.0398, 0.0168] },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-outline-variant/30 hover:bg-surface-container-highest transition-colors">
                    <td className="px-3 py-2.5 font-bold text-on-surface">{row.flow}</td>
                    {row.vals.map((v, j) => (
                      <td key={j} className="px-3 py-2.5 text-center text-on-surface">
                        {v !== null ? v : <span className="text-muted-foreground/30">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table 2 */}
          <div className="overflow-x-auto bg-surface-container-low border-2 border-outline-variant/30 mb-8">
            <table className="w-full font-mono text-xs">
              <thead>
                <tr className="bg-surface-container-high">
                  <th className="px-3 py-3 text-left text-xs uppercase tracking-widest text-on-surface border-b-2 border-outline-variant">
                    m³/min
                  </th>
                  {["3/4\"", "1\"", "1½\"", "1¾\"", "2\"", "2½\"", "3\"", "3½\""].map((d) => (
                    <th key={d} className="px-3 py-3 text-center text-xs uppercase tracking-widest text-on-surface border-b-2 border-outline-variant">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { flow: 3.4, vals: [22, 6.13, 1.55, 0.684, 0.193, 0.0511, 0.0203] },
                  { flow: 3.8, vals: [null, 7.66, 1.94, 0.855, 0.241, 0.0636, 0.0264] },
                  { flow: 4.2, vals: [null, 9.35, 2.36, 1.05, 0.295, 0.0780, 0.0311] },
                  { flow: 4.4, vals: [null, 10.3, 2.54, 1.15, 0.323, 0.0855, 0.0341, 0.0158] },
                  { flow: 4.8, vals: [null, 12.2, 3.09, 1.36, 0.385, 0.102, 0.0406, 0.0189] },
                  { flow: 5.0, vals: [null, 13.3, 3.35, 1.48, 0.418, 0.111, 0.044, 0.0204] },
                  { flow: 5.5, vals: [null, 16.0, 4.06, 1.79, 0.505, 0.134, 0.0533, 0.0244] },
                  { flow: 6.0, vals: [null, 19.1, 4.82, 2.13, 0.601, 0.159, 0.0634, 0.0299] },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-outline-variant/30 hover:bg-surface-container-highest transition-colors">
                    <td className="px-3 py-2.5 font-bold text-on-surface">{row.flow}</td>
                    {row.vals.map((v, j) => (
                      <td key={j} className="px-3 py-2.5 text-center text-on-surface">
                        {v !== null ? v : <span className="text-muted-foreground/30">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table 3 */}
          <div className="overflow-x-auto bg-surface-container-low border-2 border-outline-variant/30 mb-8">
            <table className="w-full font-mono text-xs">
              <thead>
                <tr className="bg-surface-container-high">
                  <th className="px-3 py-3 text-left text-xs uppercase tracking-widest text-on-surface border-b-2 border-outline-variant">
                    m³/min
                  </th>
                  {["1½\"", "2\"", "2½\"", "3\"", "3½\"", "4\"", "5\""].map((d) => (
                    <th key={d} className="px-3 py-3 text-center text-xs uppercase tracking-widest text-on-surface border-b-2 border-outline-variant">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { flow: 6.5, vals: [2.50, 0.709, 0.187, 0.0744, 0.0346] },
                  { flow: 7.0, vals: [2.90, 0.815, 0.217, 0.0863, 0.0401] },
                  { flow: 7.5, vals: [3.33, 0.940, 0.249, 0.0990, 0.0460] },
                  { flow: 8.0, vals: [3.79, 1.0, 0.283, 0.113, 0.0524, 0.0247] },
                  { flow: 8.5, vals: [4.28, 1.21, 0.319, 0.127, 0.0590, 0.0309] },
                  { flow: 9.0, vals: [4.80, 1.35, 0.358, 0.143, 0.0662, 0.0347] },
                  { flow: 9.5, vals: [5.35, 1.51, 0.399, 0.159, 0.0738, 0.0386] },
                  { flow: 10, vals: [5.93, 1.67, 0.442, 0.176, 0.0818, 0.0428] },
                  { flow: 11, vals: [7.17, 2.02, 0.535, 0.203, 0.0990, 0.0518, 0.0165] },
                  { flow: 12, vals: [8.53, 2.40, 0.637, 0.254, 0.118, 0.0616, 0.0196] },
                  { flow: 13, vals: [10.0, 2.82, 0.747, 0.298, 0.138, 0.0723, 0.0230] },
                  { flow: 14, vals: [11.6, 3.76, 0.995, 0.396, 0.184, 0.0963, 0.0306] },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-outline-variant/30 hover:bg-surface-container-highest transition-colors">
                    <td className="px-3 py-2.5 font-bold text-on-surface">{row.flow}</td>
                    {row.vals.map((v, j) => (
                      <td key={j} className="px-3 py-2.5 text-center text-on-surface">
                        {v !== null ? v : <span className="text-muted-foreground/30">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* {t("specs.calc_title")} */}
          <div className="bg-surface-container-high p-6 border-l-4 border-primary">
            <h3 className="font-sans font-bold text-sm uppercase text-on-surface mb-3">
              {t("specs.calc_title")}
            </h3>
            <ul className="space-y-2 font-mono text-sm text-on-surface-variant">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FFCE00]" />
                <span>
                  {t("specs.calc_note_1")}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#FFCE00]" />
                <span>
                  {t("specs.calc_note_2")}
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* System Configuration Image */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="bg-surface-container-high p-4 border-l-4 border-[#FFCE00] mb-6">
                <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
                  System Architecture Diagram
                </p>
              </div>
              <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tighter uppercase text-on-surface leading-none mb-6">
                System
                <br />
                Configuration
              </h2>
              <p className="font-mono text-sm text-on-surface-variant leading-relaxed">
                Compressor → Air Receiver → Refrigerated Dryer → Class C Filter → T-class
                Filter → A-class Filter → Air Consumption Point
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[16/9] bg-surface-container-lowest border-4 border-outline-variant/20 overflow-hidden">
                <img
                  src="/images/banner_compressor.png"
                  alt={t("specs.system_config")}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
