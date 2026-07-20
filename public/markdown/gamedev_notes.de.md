### Inhalt
- [Datentypen](#datentypen)
- [Variablen](#variablen)
- [Instanzen](#instanzen)
- [Singleton](#singleton)

### Datentypen

##### Integer
Speichert ganze Zahlen ohne Nachkommastellen. (max. 2.147.483.647)
```csharp
int name = 100;
```
Weitere Varianten wären:
- byte (0-255. wird häufig bei Farbwerten genutzt)
- short (für kleinere Zahlen, wird häufig verwendet wenn es sehr viele Variablen gibt und man sich sicher ist, dass der Wert niemals größer wird)
- long (für große Zahlen, die das int-Limit überschreiten, max. 9.223.372.036.854.775.807)

##### Float
Speichert Zahlen mit Nachkommastellen. Das f hinter der Zahl ist für bessere Erkennbarkeit.
```csharp
float name = 5.5f;
```
Weitere Varianten wären:
- double (für höhere Genauigkeit)
- decimal (für sehr hohe Genauigkeit)

##### Boolean
Eine bool kann nur zwei Werte haben, true oder false.
```csharp
bool hasName;
```

##### String
Ein string ist eine Zeichenkette bzw. ein Text.
```csharp
string name = "Dies ist ein Text.";
```

##### Enumeration
Erstellt eigene Datentypen mit festen Auswahlmöglichkeiten.
```csharp
enum Name
{
    First,
    Second,
    Third
}
```

##### Listen
Eine Liste ist eine dynamische Sammlung von Werten, deren Größe sich zur Laufzeit anpassen kann.
Es können beliebig viele Werte festgehalten und auch wieder entfernt werden.
```csharp
List<int> listName = new List<int>(); // eine Liste aus Integern
```
Wichtig: ohne `new List<int>();` existiert die Liste noch nicht im Speicher (RAM).

##### Arrays
Ein Array speichert mehrere Werte desselben Typs. Es hat eine feste Größe und kann nicht zur Laufzeit angepasst werden. Arrays sind sehr effizient und Ressourcensparend.
```csharp
int[] arrayName; // ein Array aus Integern
```

##### Dictionary
Ein Dictionary speichert Werte als Schlüssel-Wert-Paare.
```csharp
Dictionary<content> dictionaryName;
```

##### Klassen
Klassen sind ebenfalls Datentypen und können als Variablen deklariert und genutzt werden.
```csharp
GameObject name;
```
Das geht zum Beispiel mit:
- GameObject
- Transform
- Rigidbody
- eigene Klassen

### Variablen
> **INFO:** Um Variablen im Unity-Inspector sehen zu können, MUSS die erste Variable public oder SerializeField sein.

##### Public
Eine öffentliche Variable, auf die jede andere Klasse zugreifen und sie verändern kann. Zudem erscheint sie im Unity-Inspector.
```csharp
public variableType variableName;
```

##### Private
Eine private Variable, die nur innerhalb der eigenen Klasse verwendet werden kann. Sie erscheint nicht im Unity-Inspector.
Private Variablen werden häufig mit einem Unterstrich _ am Anfang markiert.
```csharp
private variableType _variableName;
```

##### SerializeField
Eine private Variable, die im Unity-Inspector sichtbar und bearbeitbar gemacht wird. Andere Klassen können weiterhin nicht darauf zugreifen.
```csharp
[SerializeField] private variableType _variableName;
```

##### Static
Eine statische Variable, die zur Klasse statt zu einer Instanz gehört. Es existiert nur diese eine einzige Variable in der Klasse, welche von allen Instanzen gemeinsam genutzt wird.
Statics können sowohl public, als auch private sein.
```csharp
public static variableType variableName;
```

##### Const
Eine Konstante, deren Wert beim Compilen festgelegt wird und anschließend nicht mehr verändert werden kann.
```csharp
public const variableType variableName = 100;
```

##### Readonly
Eine Variable, die nur einmal gesetzt werden kann und danach unveränderlich ist.
Der Unterschied zu const ist, dass ihr Wert bereits beim Schreiben des Codes feststehen muss, während eine readonly ihren Wert erst beim Erstellen des Objekts erhält.
```csharp
public readonly variableType variableName;
```

##### Header
Fügt im Unity-Inspector eine Überschrift über der Variable ein.
```csharp
[Header("Header Title")]
```

##### Tooltip
Zeigt einen Hilfstext beim Hovern über die Variable im Unity-Inspector an.
```csharp
[Tooltip("Tooltip text when hovered.")]
```

##### Space
Fügt einen Abstand zwischen Variablen im Unity-Inspector ein.
Die Größe des Abstandes kann spezifiziert werden.
```csharp
[Space]
// oder
[Space(25)]
```

##### HideInInspector
Versteckt eine public Variable im Unity-Inspector.
```csharp
[HideInInspector]
```

##### Range
Zeigt für numerische Werte einen Slider im Unity-Inspector an, welcher die festgelegte Spanne hat.
```csharp
[Range(0, 100)]
```

##### TextArea
Zeigt einen mehrzeiligen Textbereich im Unity-Inspector an.
Die minimale und maximale Höhe des Textfeldes kann spezifiziert werden.
```csharp
[TextArea]
// oder
[TextArea(5, 10)]
```

##### Multiline
Erlaubt einen mehrzeiligen Text im Unity-Inspector, allerdings ohne die automatische Größenanpassung einer TextArea.
```csharp
[Multiline]
```

##### ContextMenu
Fügt im Unity-Inspector eine anklickbare Schaltfläche (Menüeintrag im Kontextmenü) hinzu, mit der eine Methode im Editor ausgeführt werden kann. Dies funktioniert nur für Methoden ohne Parameter!
```csharp
[ContextMenu("Execute Method Order 66")]

// Beispiel
private int _health = 100;

[ContextMenu("Reset Health")]
private void ResetHealth()
{
    _health = 100;
}
```

##### ContextMenuItem
Hier erscheint das Menü direkt auf der Variable und kann mit einem Rechtsklick -> MenuName ausgelöst werden.
```csharp
[ContextMenuItem("MenuName", "MethodName")]

// Beispiel
[ContextMenuItem("MenuName", "MethodName")]
public int currentHealth;

private void ResetHealth()
{
    currentHealth = 100;
}
```

### Instanzen
Eine Instance ist ein konkretes Objekt, das aus einer Klasse erzeugt wurde.
Eine Klasse kann beliebig viele Instanzen besitzen.
```csharp
ClassName className = new ClassName();
```

In Unity wird es oft für ein Singleton verwendet.

### Singleton
Ein Singleton ist ein Muster, welches mit einer statischen Variable sicherstellt, dass von einer Klasse im ganzen Spiel nur **eine einzige Instanz** existieren darf, auf die von überall im Code zugegriffen werden kann.

Instance ist hierbei die Referenz, auf die einzige Instanz der Singleton.

##### Basic-Singleton
Bei dieser Variante ist die Instance-Variable eine public static. Das bedeutet, jede andere Klasse im Projekt kann die Referenz auf die Instanz lesen, aber auch überschreiben. Durch das static kann diese Variable nur ein einziges Mal im Projekt existieren.
```csharp
public class ClassName : MonoBehaviour
{
    public static ClassName Instance;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
        DontDestroyOnLoad(gameObject);
    }
}
```

##### Advanced-Singleton
In dieser Singleton wird das Prinzip der Kapselung angewendet. Die eigentliche Instanz `_instance` ist private. Nach außen wird sie über ein schreibgeschütztes Property Instance freigegeben.
Vorteil: Die Instance ist nur Read-Only und weniger Fehleranfällig
```csharp
public class ClassName : MonoBehaviour
{
    private static ClassName _instance;
    public static ClassName Instance => _instance;

    private void Awake()
    {
        if (_instance != null && _instance != this)
        {
            Destroy(gameObject);
            return;
        }
        _instance = this;
        DontDestroyOnLoad(gameObject);
    }
}
```
