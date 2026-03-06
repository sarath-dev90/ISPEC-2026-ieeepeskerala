import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

/* ── Fee data ── */
const feeGroups = [
    {
        id: 'industry', label: '🏭 Industry Professionals',
        rows: [
            { name: 'PES Member', ebIn: 'XXXXX', ebFo: 'XXXXX', stIn: 'XXXXX', stFo: 'XXXXX' },
            { name: 'IEEE Member', ebIn: '₹ 9,000', ebFo: '300 USD', stIn: '₹ 10,000', stFo: '350 USD' },
            { name: 'Non-Member', ebIn: '₹ 10,000', ebFo: '350 USD', stIn: '₹ 11,000', stFo: '400 USD' },
        ]
    },
    {
        id: 'academia', label: '🎓 Academia',
        rows: [
            { name: 'PES Member', ebIn: 'XXXXX', ebFo: 'XXXXX', stIn: 'XXXXX', stFo: 'XXXXX' },
            { name: 'IEEE Member', ebIn: '₹ 8,000', ebFo: '250 USD', stIn: '₹ 9,000', stFo: '300 USD' },
            { name: 'Non-Member', ebIn: '₹ 9,000', ebFo: '300 USD', stIn: '₹ 10,000', stFo: '350 USD' },
        ]
    },
    {
        id: 'students', label: '📚 Students / Additional Delegates',
        rows: [
            { name: 'Student PES Member', ebIn: 'XXXXX', ebFo: 'XXXXX', stIn: 'XXXXX', stFo: 'XXXXX' },
            { name: 'IEEE Member', ebIn: '₹ 6,000', ebFo: '150 USD', stIn: '₹ 7,000', stFo: '200 USD' },
            { name: 'Non-Member', ebIn: '₹ 7,000', ebFo: '200 USD', stIn: '₹ 8,000', stFo: '250 USD' },
            { name: 'Student Non-IEEE Member', ebIn: 'XXXXX', ebFo: 'XXXXX', stIn: 'XXXXX', stFo: 'XXXXX' },
        ]
    },
    {
        id: 'life', label: '⭐ IEEE Life Member',
        rows: [
            { name: 'IEEE Life Member', ebIn: '₹ 6,000', ebFo: '150 USD', stIn: '₹ 7,000', stFo: '200 USD' },
        ]
    },
    {
        id: 'addpaper', label: '📄 Additional Paper',
        rows: [
            { name: 'Additional Paper', ebIn: 'XXXXX', ebFo: 'XXXXX', stIn: 'XXXXX', stFo: 'XXXXX' },
        ]
    },
    {
        id: 'nonpresenter', label: '👤 Non-Presenters',
        rows: [
            { name: 'Non-Presenter PES Member', ebIn: 'XXXXX', ebFo: 'XXXXX', stIn: 'XXXXX', stFo: 'XXXXX' },
            { name: 'Non-Presenter IEEE Member', ebIn: 'XXXXX', ebFo: 'XXXXX', stIn: 'XXXXX', stFo: 'XXXXX' },
            { name: 'Non-Presenter Non-IEEE Member', ebIn: 'XXXXX', ebFo: 'XXXXX', stIn: 'XXXXX', stFo: 'XXXXX' },
        ]
    },
];

/* ── Collapsible fee table ── */
const FeeTable = () => {
    const allIds = feeGroups.map(g => g.id);
    const [open, setOpen] = useState({});
    const allExpanded = allIds.every(id => open[id]);

    const toggle = (id) => setOpen(prev => ({ ...prev, [id]: !prev[id] }));
    const toggleAll = () => {
        if (allExpanded) { setOpen({}); }
        else { const s = {}; allIds.forEach(id => { s[id] = true; }); setOpen(s); }
    };

    const cellBase = { padding: '11px 14px', fontSize: '0.96rem', color: '#444' };
    const labelCell = { ...cellBase, textAlign: 'left', paddingLeft: '28px' };
    const midCell = { ...cellBase, borderRight: '1px solid #eee' };

    return (
        <>
            {/* Expand All toggle */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <button
                    onClick={toggleAll}
                    className={`btn-expand-all${allExpanded ? ' is-expanded' : ''}`}
                >
                    <i className={`fas ${allExpanded ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    {allExpanded ? 'Collapse All' : 'Expand All'}
                </button>
            </div>

            <div style={{ border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', backgroundColor: '#fff', minWidth: '700px' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#00629b', color: '#fff' }}>
                            <th rowSpan={2} style={{ padding: '14px 15px', borderBottom: '2px solid #004a7c', borderRight: '1px solid #004a7c', textAlign: 'left', fontWeight: 'bold', minWidth: '220px' }}>
                                Categories
                            </th>
                            <th colSpan={2} style={{ padding: '14px 15px', borderBottom: '1px solid #004a7c', borderRight: '1px solid #004a7c', fontWeight: 'bold' }}>
                                Early Bird<br /><span style={{ fontSize: '0.78rem', fontWeight: 'normal' }}>Before 15 Sep 2026</span>
                            </th>
                            <th colSpan={2} style={{ padding: '14px 15px', borderBottom: '1px solid #004a7c', fontWeight: 'bold' }}>
                                Standard<br /><span style={{ fontSize: '0.78rem', fontWeight: 'normal' }}>16 Sep – 1 Nov 2026</span>
                            </th>
                        </tr>
                        <tr style={{ backgroundColor: '#004b79', color: '#fff' }}>
                            {['Indian Delegates', 'Foreign Delegates', 'Indian Delegates', 'Foreign Delegates'].map((h, i) => (
                                <th key={i} style={{ padding: '9px 12px', borderBottom: '2px solid #004a7c', fontWeight: '600', fontSize: '0.85rem', ...(i === 1 ? { borderRight: '1px solid #004a7c' } : {}) }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {feeGroups.map((group) => (
                            <React.Fragment key={group.id}>
                                {/* Group header — clickable */}
                                <tr
                                    onClick={() => toggle(group.id)}
                                    style={{ backgroundColor: open[group.id] ? '#d8edf9' : '#eaf3fb', cursor: 'pointer', transition: 'background 0.2s', userSelect: 'none' }}
                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#c8e3f5'}
                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = open[group.id] ? '#d8edf9' : '#eaf3fb'}
                                >
                                    <td colSpan={5} style={{
                                        padding: '11px 15px', textAlign: 'left', fontWeight: 'bold',
                                        color: '#00629b', fontSize: '1rem',
                                        borderBottom: open[group.id] ? '1px solid #b8d8f0' : '1px solid #d0e4f5',
                                        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                                    }}>
                                        <span>{group.label}</span>
                                        <span style={{
                                            fontSize: '0.8rem', color: '#00629b',
                                            transform: open[group.id] ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.3s ease', display: 'inline-block'
                                        }}>
                                            <i className="fas fa-chevron-down"></i>
                                        </span>
                                    </td>
                                </tr>

                                {/* Animated sub-rows */}
                                {group.rows.map((row, ri) => (
                                    <tr key={ri} style={{
                                        backgroundColor: ri % 2 === 0 ? '#fff' : '#f8f9fa',
                                        borderBottom: '1px solid #eee',
                                        display: open[group.id] ? 'table-row' : 'none',
                                        animation: open[group.id] ? `fadeSlideIn 0.2s ease ${ri * 0.04}s both` : 'none',
                                    }}>
                                        <td style={labelCell}>{row.name}</td>
                                        <td style={cellBase}>{row.ebIn}</td>
                                        <td style={midCell}>{row.ebFo}</td>
                                        <td style={cellBase}>{row.stIn}</td>
                                        <td style={cellBase}>{row.stFo}</td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}

                        {/* Add-ons — always visible */}
                        <tr style={{ backgroundColor: '#fffde7' }}>
                            <td colSpan={5} style={{ padding: '12px 15px', textAlign: 'left', fontWeight: 'bold', color: '#7a6000', fontSize: '0.97rem', borderTop: '2px solid #f9e400' }}>
                                🍽️ *Add-on Gala Dinner (companion) — XXXXX
                            </td>
                        </tr>
                        <tr style={{ backgroundColor: '#f3f0ff' }}>
                            <td colSpan={5} style={{ padding: '12px 15px', textAlign: 'left', fontWeight: 'bold', color: '#4a3b8c', fontSize: '0.97rem', borderTop: '2px solid #c5b8ff' }}>
                                🔬 Technical Visit – Green Energy Testbed — XXXXX
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <style>{`
                @keyframes fadeSlideIn {
                    from { opacity: 0; transform: translateY(-6px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </>
    );
};

/* ── Terms & Conditions sections ── */
const tcSections = [
    {
        title: 'Items Included in Registration Fee',
        body: (<>
            <p style={{ fontWeight: '600', marginBottom: '8px' }}>Regular (Early Bird / Standard) includes:</p>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li>Conference kit</li>
                <li>Admission to all sessions, tea/coffee breaks, and lunches</li>
                <li>Conference gala dinner</li>
            </ul>
            <p style={{ fontWeight: '600', marginBottom: '8px' }}>Non-Presenter / Companion includes:</p>
            <ul style={{ paddingLeft: '20px' }}>
                <li>Conference kit</li>
                <li>Admission to all sessions, tea/coffee breaks, and lunches</li>
                <li>Gala dinner available as add-on</li>
            </ul>
        </>)
    },
    {
        title: 'Early Registration (Early Bird)',
        body: <p>Authors paying by <strong>15 September 2026</strong> benefit from the Early Bird rate.</p>
    },
    {
        title: 'IEEE & PES Members Registration',
        body: <p>IEEE &amp; PES members receive a discount. Indicate your <strong>IEEE membership number</strong> during registration and bring your membership card to the conference.</p>
    },
    {
        title: 'Student Rates',
        body: <p>Eligible for full-time undergraduate or postgraduate students. Email a scanned Student ID to <a href="mailto:contact@ispec2026.org" style={{ color: '#2e8b57' }}>contact@ispec2026.org</a> and bring it to the conference.</p>
    },
    {
        title: 'Payment of Registration Fees',
        body: (<>
            <p style={{ marginBottom: '10px' }}><strong>International participants:</strong> Payable in USD via credit card through the iSPEC 2026 registration portal.</p>
            <p style={{ marginBottom: '10px' }}><strong>Indian participants:</strong> Payable in INR via NEFT / RTGS / UPI. Bank details communicated upon acceptance.</p>
            <p>All bank charges are borne by the participant. Email proof of payment to <a href="mailto:contact@ispec2026.org" style={{ color: '#2e8b57' }}>contact@ispec2026.org</a>.</p>
        </>)
    },
    {
        title: 'No-Show and Originality Policy',
        body: (<>
            <p style={{ marginBottom: '10px' }}>IEEE has a strict <strong>"NO-SHOW"</strong> policy — authors who do not present risk exclusion from <strong>IEEE Xplore</strong>. One author or representative <strong>MUST</strong> present the paper.</p>
            <p>Papers with a <strong>similarity index above 30%</strong> will be rejected.</p>
        </>)
    },
    {
        title: 'Cancellation Policy',
        body: (<>
            <p style={{ marginBottom: '10px' }}>Cancellations must be notified in writing to <a href="mailto:contact@ispec2026.org" style={{ color: '#2e8b57' }}>contact@ispec2026.org</a>.</p>
            <ul style={{ paddingLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}>Cancellations <strong>before 1 November 2026</strong>: subject to a <strong>50% charge</strong>.</li>
                <li style={{ marginBottom: '8px' }}>Registration may be <strong>transferred</strong> to another person free of charge.</li>
                <li><strong>No refund</strong> after <strong>1 November 2026</strong>.</li>
            </ul>
        </>)
    },
    {
        title: 'Disclaimer',
        body: <p style={{ textAlign: 'justify' }}>Every effort will be made to deliver the program as published. The conference reserves the right to make changes without prior notice. Participants are advised to obtain personal travel insurance. The conference does not compensate for booking cancellations, loss, theft, or damages.</p>
    },
];

/* ══════════════════════════════════════════════════ */

const RegistrationPage = () => {
    return (
        <PageLayout title="Registration">
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px', paddingBottom: '60px' }}>

                {/* Intro */}
                <div style={{ marginBottom: '40px', fontSize: '1.1rem', lineHeight: '1.6', color: '#444' }}>
                    <p style={{ marginBottom: '20px' }}>The registration page is not open yet.</p>
                    <p style={{ marginBottom: '20px' }}>
                        All registration fees are in Indian Rupees (INR) and include applicable taxes. For online registration, payment methods will be credit card, debit card, or net banking (the sender is responsible for all banking fees).
                    </p>
                    <div style={{ marginTop: '25px' }}>
                        <a href="#" style={{
                            background: '#2e8b57', color: '#fff', padding: '12px 25px', borderRadius: '50px',
                            fontSize: '1.05rem', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block',
                            boxShadow: '0 4px 10px rgba(16,167,47,0.2)', transition: 'transform 0.2s, background 0.2s'
                        }}>Registration Coming Soon!</a>
                    </div>
                </div>

                <div style={{ height: '1px', background: '#e0e0e0', margin: '40px 0' }}></div>

                {/* Registration Fees */}
                <section style={{ marginBottom: '50px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
                        <h2 style={{ fontSize: '1.8rem', color: '#333', fontWeight: 'bold', margin: 0 }}>Registration Fees</h2>
                        <span style={{ fontSize: '0.9rem', color: '#888' }}>
                            <i className="fas fa-info-circle" style={{ marginRight: '5px' }}></i>
                            Click any category header to expand / collapse
                        </span>
                    </div>
                    <FeeTable />
                    <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#666', fontSize: '0.95rem' }}>
                        * IEEE membership must be active and verified during registration. A valid student ID must be provided for student categories. All fees are inclusive of applicable taxes.
                    </p>
                </section>

                {/* Registration Period */}
                <h3 style={{ fontSize: '1.4rem', color: '#00629b', marginBottom: '15px', fontWeight: 'bold', borderLeft: '4px solid #2e8b57', paddingLeft: '10px' }}>Registration Period</h3>
                <div style={{ marginBottom: '35px', paddingLeft: '14px', fontSize: '1.05rem', color: '#444' }}>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li style={{ marginBottom: '8px' }}><strong>Early-bird Registration:</strong> until 15 September 2026</li>
                        <li style={{ marginBottom: '8px' }}><strong>Standard Registration:</strong> 16 September 2026 – 1 November 2026</li>
                        <li style={{ marginBottom: '8px' }}><strong>Onsite Registration:</strong> After 1 November 2026</li>
                    </ul>
                </div>

                {/* Registration Inclusions */}
                <h3 style={{ fontSize: '1.4rem', color: '#00629b', marginBottom: '20px', fontWeight: 'bold', borderLeft: '4px solid #2e8b57', paddingLeft: '10px' }}>Registration Inclusions</h3>
                <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden', marginBottom: '40px', overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', backgroundColor: '#fff' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#00629b', color: '#fff' }}>
                                {['Category', 'Main Sessions', 'Welcome Reception', 'Conference Banquet', 'Lunches & Coffee Breaks', 'Full Paper Publication'].map((h, i) => (
                                    <th key={i} style={{ padding: '12px', borderBottom: '2px solid #004a7c', fontWeight: 'bold', textAlign: i === 0 ? 'left' : 'center', minWidth: i === 0 ? '160px' : undefined }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: '1rem', color: '#444' }}>
                            <tr style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '12px', textAlign: 'left' }}><strong>Non-student registration (A, B, C, F)</strong></td>
                                <td style={{ padding: '12px', color: '#2e8b57' }}><i className="fas fa-check"></i></td>
                                <td style={{ padding: '12px', color: '#2e8b57' }}><i className="fas fa-check"></i></td>
                                <td style={{ padding: '12px', color: '#2e8b57' }}><i className="fas fa-check"></i></td>
                                <td style={{ padding: '12px' }}><i className="fas fa-check" style={{ color: '#2e8b57', marginRight: '5px' }}></i>(All days)</td>
                                <td style={{ padding: '12px' }}><i className="fas fa-check" style={{ color: '#2e8b57', marginRight: '5px' }}></i>(Up to <strong>two</strong> papers)</td>
                            </tr>
                            <tr style={{ backgroundColor: '#f8f9fa' }}>
                                <td style={{ padding: '12px', textAlign: 'left' }}><strong>Student registration (D, E)</strong></td>
                                <td style={{ padding: '12px', color: '#2e8b57' }}><i className="fas fa-check"></i></td>
                                <td style={{ padding: '12px', color: '#2e8b57' }}><i className="fas fa-check"></i></td>
                                <td style={{ padding: '12px', color: '#999' }}>-</td>
                                <td style={{ padding: '12px' }}><i className="fas fa-check" style={{ color: '#2e8b57', marginRight: '5px' }}></i>(All days)</td>
                                <td style={{ padding: '12px' }}><i className="fas fa-check" style={{ color: '#2e8b57', marginRight: '5px' }}></i>(Up to <strong>one</strong> paper)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ height: '1px', background: '#e0e0e0', margin: '40px 0' }}></div>

                {/* Extra Charges */}
                <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '20px', fontWeight: 'bold' }}>Extra Charges</h2>
                <p style={{ fontSize: '1.05rem', color: '#444', marginBottom: '25px', lineHeight: '1.6' }}>
                    One of the authors (typically the presenter) is responsible for paying the extra page charges and/or the extra paper charges, if applicable.
                </p>
                <h3 style={{ fontSize: '1.3rem', color: '#00629b', marginBottom: '10px', fontWeight: 'bold' }}>Extra Page Charge</h3>
                <p style={{ fontSize: '1.05rem', color: '#444', marginBottom: '25px', lineHeight: '1.6' }}>
                    Pages exceeding 6 will incur an extra charge of <strong>XXXXX INR</strong> per page (max 2 extra pages, 8 pages total).
                </p>
                <h3 style={{ fontSize: '1.3rem', color: '#00629b', marginBottom: '10px', fontWeight: 'bold' }}>Extra Paper Charge</h3>
                <p style={{ fontSize: '1.05rem', color: '#444', marginBottom: '40px', lineHeight: '1.6' }}>
                    Papers beyond the covered limit (2 for non-students, 1 for students) incur an extra charge of <strong>INR 12,000</strong> per additional paper.
                </p>

                <div style={{ height: '1px', background: '#e0e0e0', margin: '40px 0' }}></div>

                {/* Terms & Conditions */}
                <section style={{ marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '2rem', color: '#00629b', marginBottom: '30px', fontWeight: 'bold', borderBottom: '3px solid #2e8b57', paddingBottom: '12px' }}>
                        Terms &amp; Conditions
                    </h2>
                    <div style={{ background: '#fff8e1', border: '1px solid #ffe082', borderRadius: '10px', padding: '20px 25px', marginBottom: '30px' }}>
                        <p style={{ margin: 0, fontSize: '1.05rem', color: '#444', lineHeight: '1.7' }}>
                            <strong>⚠️ Important:</strong> At least one author of each accepted paper must register. Each registration covers a maximum of <strong>two (2) papers</strong>, with a limit of <strong>6 pages per paper</strong>. Each additional page incurs <strong>XXXXX INR</strong> per page. Payment deadline: <strong>1 November 2026</strong>.
                        </p>
                    </div>

                    {tcSections.map(({ title, body }, i) => (
                        <div key={i} style={{ marginBottom: '28px' }}>
                            <h3 style={{ fontSize: '1.3rem', color: '#00629b', marginBottom: '12px', fontWeight: 'bold', borderLeft: '4px solid #2e8b57', paddingLeft: '10px' }}>{title}</h3>
                            <div style={{ fontSize: '1.02rem', color: '#444', lineHeight: '1.7', paddingLeft: '14px' }}>{body}</div>
                        </div>
                    ))}
                </section>

            </div>
        </PageLayout>
    );
};

export default RegistrationPage;
