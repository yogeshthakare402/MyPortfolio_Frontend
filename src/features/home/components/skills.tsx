import type { SkillGroup } from '@/data/portfolio-data';

type SkillsProps = {
  groups: SkillGroup[];
};

export default function Skills({ groups }: SkillsProps) {
  return (
    <div className="skills-grid">
      {groups.map((group) => (
        <article key={group.title} className="skill-card glass-card">
          <div className="skill-card-head">
            <span className="skill-icon">{group.icon}</span>
            <h3>{group.title}</h3>
          </div>
          <ul>
            {group.items.map((item) => (
              <li key={item.name}>
                <div className="skill-row">
                  <span>{item.name}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="skill-track" role="presentation">
                  <span style={{ width: `${item.level}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
